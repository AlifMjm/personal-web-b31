let blogs = []

function addBlog(event) {

    event.preventDefault()

    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image')

    image = URL.createObjectURL(image.files[0])

    let blog = {
        author: 'Alif Mjm',
        title,
        content,
        image,
        postedAt: new Date()
    }

    blogs.push(blog)

    renderBlog()
}

function renderBlog() {
    
    // looping / perulangan
    for (let i = 0; i < lengthData; i++) {
        
        
        

    }
}