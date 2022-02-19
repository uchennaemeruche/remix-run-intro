import {useTransition, useActionData, redirect, Form } from "remix";
import { createPost } from "~/post";
import { createPostInFS } from "~/repository/fs.posts";


export const action = async ({ request }) => {
    await new Promise(res => setTimeout(res, 1000))
    const formData = await request.formData()

    const title = formData.get("title")
    const slug = formData.get("slug")
    const markdown = formData.get("markdown")

    const errors = {}
    if (!title) errors.title = true
    if (!slug) errors.slug = true
    if (!markdown) errors.markdown = true
    
    if (Object.keys(errors).length) {
        return errors
    }

    await createPost(createPostInFS, { title, slug, markdown })
    return redirect("/admin")
}

export default function NewPost() {
    const errors = useActionData()
    const transition = useTransition()
    return (
        <Form method="post">
            <p>
                <label >
                    Post Title: {" "} {errors?.title ? (<em>Title is required</em>) : null} <input type="text" name="title" id="" />
                </label>
            </p>
            <p>
                <label >
                    Post Slug: {" "} {errors?.slug ? (<em>Slug is required</em>) : null} <input type="text" name="slug" id="" />
                </label>
            </p>
            <p>
                <label htmlFor="markdown"> Markdown: {" "} {errors?.markdown ? (<em>Markdown is required</em>) : null} </label>
                <br />
                <textarea name="markdown" id="markdown" rows="{20}"></textarea>
            </p>
            <p>
                <button type="submit">
                    {transition.submission ? "Creating..." : "Create Post"}
                </button>
            </p>
        </Form>
    )
}