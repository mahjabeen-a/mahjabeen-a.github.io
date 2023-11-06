import blogImage1 from "../assets/image/blogs/kmm-blog-1.webp"
import blogImage2 from "../assets/image/blogs/nudge-theory-blog-1.webp"

const allBlogsData = [
    {
        id: 1,
        category: "Android",
        thumbnail: blogImage1,
        title: "Kotlin MultiPlatform Mobile (KMM) - Part 1",
        date: "04 November, 2023",
        author: "Akash Murugesh",
        url: "https://medium.com/@akashmurugeshk/kotlin-multiplatform-mobile-kmm-918a30bf30ba",
    },
    {
        id: 2,
        category: "UI/UX",
        thumbnail: blogImage2,
        title: "Nudge Theory: The Crossroads Of Influence",
        date: "04 November, 2023",
        author: "Akash Murugesh",
        url: "https://medium.com/@akashmurugeshk/nudge-theory-explained-b91722808efc",
    }
];

const selectedIDs: number[] = [1,2];

const recentBlogsData = allBlogsData.filter((obj) => selectedIDs.includes(obj.id));

export { allBlogsData, recentBlogsData};