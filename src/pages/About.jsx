import Blog from "../components/Blog";
import "../css/about.css";

export default function About() {
    return (
        <>
            <main class="about-content">
                <div class="about-header">
                    <img src="../images/square-avatar-small.jpg" alt="Rae looking into the camera with a cat in the background" class="about-img" />
                    <div class="about-intro">
                        <h1 class="about-title title">Hi there! My name is Rae, welcome to my learning journal.</h1>
                        <p class="about-text">I started my career in tech in 2017 as an intern at a local web development company. As the company evolved the web department became obsolete
                            so my bosss helped me attend a bootcamp to become a front end developer. I finshed the bootcamp in may of 2025.
                        </p>
                    </div>
                </div>
                <div class="about-inner-content">
                    <h2>How I stay committed to learning</h2>
                    <p>While I am very passionate about front end development and find it entertaining on it's own, sometimes that isn't enough. When you've been studying every
                        night for a minimum of two hours each day for three months you get tired. You miss having a life, or relaxing. To keep myself motivated I rely heavily on
                        a study budy. This has been cruicial. 
                    </p>
                    <p>Coming up with new and exciting projects is fun, but I need the passion to do that. I don't always have the passion, but having someone hold me accountable
                        keeps me from giving up when the passion comes and goes. Sometimes if even that doesn't work, I'll look at my old projects and try to fix or improve the code.
                    </p>
                    <p>If even that doesn't work I code review. It shows me how much I know, keeps the knowledge at the front of my mind, and boosts my ego.</p>

                    <h2>How I got started</h2>
                    <p>When I was in high school I took a computer science class, which was really just learning basic HTML. It wasn't anything crazy, but I was good at it and I like
                        the envirment. I never really had any talent for anything until this, so it felt good to be good at something. Plus being able to just sit alone at a computer and
                        listen to music and type away felt good. It was so much easier than any other class.
                    </p>
                    <p>After that I decided to go to college for computer science. I wasn't a particularly good student, but it just felt like what I was supposed to do. Before enrolling in
                        college I was advised my a school counselor to not go into computer science because I was a woman, and it would be hard because of the mysogyny. I went anyway, and witnessed
                        the mysogyny first hand. It was brutal. I ended up dropping out of collage for many reasons, that being one, and gave up on that dream.
                    </p>
                    <p>During this time I became a web developer using wordpress as my main platform. I wasn't particularly amazing, but I did good, especially for someone who wasn't given very
                        much direction as the company was moving in a new direction. Eventually though, I got bored. I talked to my boss and he let me do on the job training to become a developer.
                        I wasn't very good. There were so many different languages to learn that I had never even seen, and everyone knew so much more than me. I stuck with it, but couldn't progress
                        as much as I or my boss had hoped.
                    </p>
                    <p>That's when my bosss decided to give me a very kind offer. Either they would give me the web department (as they were planning to sell it) or they would pay for me to go to a
                        frontend developer trade school. After asking anyone who would listen for their opinion, and stressing out for about a week, I made my choice. I chose to get the education for
                        frontend development. I am so glad I did.
                    </p>

                    <h2>Where I hope to go</h2>
                    <p>I hope to finish the bootcamp I am in. I want to finish it and continue my learning until I feel like a well rounded frontend developer. Not just a junior developer either (no shame though!).
                        Then I would like to get into full stack development, once I am ready. I think I'll be very good at it. I'd also like to get more education on accessible design and design in general. I have lots
                        to learn!
                    </p>
                </div>
                <div class="recent-posts">
                    <h2 class="recent-posts-header">Recent Posts</h2>
                    <div class="three-recent-posts posts" id="threeRecentPosts">
                        <Blog amount={3} />
                    </div>
                </div>
            </main>
        </>
    );
}
