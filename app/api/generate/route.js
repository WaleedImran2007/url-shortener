// import clientPromise from "@/lib/mongodb"

// export async function POST(request) {

//     const body = await request.json()
//     const client = await clientPromise
//     const db = client.db("bitlinks")
//     const collection = await db.collection("url")

//     //check if short url exists 
//     const doc = await collection.findOne({ shorturl: body.shorturl})
//     if(doc) {
//         return Response.json({ success: false, error: true ,message: 'URL already exists' })
//     }

//     const result = await collection.insertOne({
//         url: body.url,
//         shorturl: body.shorturl,
//     })


//   return Response.json({ success: true, error: false ,message: 'URL generated successfully' })
// }

import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    try {
        const body = await request.json()
        console.log("Received body:", body)
        const client = await clientPromise
        const db = client.db("bitlinks")
        const collection = db.collection("url")

        // Check if short url already exists
        const doc = await collection.findOne({ shorturl: body.shorturl })
        if (doc) {
            return Response.json({ success: false, error: true, message: 'Short URL already exists' })
        }

        // Insert new short url
        await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl,
        })

        return Response.json({ success: true, error: false, message: 'URL generated successfully' })
    } catch (error) {
        console.error("API Error:", error)
        return Response.json(
            { success: false, error: true, message: 'Internal Server Error' },
            { status: 500 }
        )
    }
}

