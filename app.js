const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.querySelector("main");
let main = ""
for (let i = 0; i < posts.length; i++) {
    main += `
        <article>
            <div class="user-container">
                <img class="user-avatar" src="${posts[i].avatar}" alt="User avatar.">
                <div class="user-details">
                    <span class="user-name"><p>${posts[i].name}</p></span>
                    <span class="user-location"><p>${posts[i].location}</p></span>
                </div>
            </div>
            <div class="post-image">
                <img id="img-${i}" src="${posts[i].post}" alt="A drawing of ${posts[i].name}.">
            </div>
            <div class="post-actions">
                <div class="icons">
                    <img id="btn-like-${i}" src="images/icon-heart.png" alt="A heart icon to like the post.">
                    <img src="images/icon-comment.png" alt="A chat bubble icon to comment the post.">
                    <img src="images/icon-dm.png" alt="A paper plane icon to share the post.">
                </div>
                <div id="likes-${i}" class="likes">
                    <p>${posts[i].likes} likes</p>
                </div>
                <div class="comment-section">
                    <span class="comment-user"><p>${posts[i].username}</p></span>
                    <span class="comment-detail"><p>${posts[i].comment}</p></span>
                </div>
            </div>
        </article>
    `
}

mainEl.innerHTML = main;

for (let i = 0; i < posts.length; i++) {
    const btnLike = document.getElementById(`btn-like-${i}`)
    const likesCount = document.getElementById(`likes-${i}`)
    const imgEl = document.getElementById(`img-${i}`)

    btnLike.addEventListener("click", function () {
        posts[i].likes++
        likesCount.innerHTML = `<p>${posts[i].likes} likes</p>`
    })

    imgEl.addEventListener("dblclick", function () {
        posts[i].likes++
        likesCount.innerHTML = `<p>${posts[i].likes} likes</p>`
    })
}