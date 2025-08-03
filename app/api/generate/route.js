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

import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.url || !body.shorturl) {
      return Response.json(
        { success: false, error: true, message: "Missing URL or shorturl" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    // Check if short URL already exists
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
      return Response.json({
        success: false,
        error: true,
        message: "Short URL already exists",
      });
    }

    // Insert new URL mapping
    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    });

    return Response.json({
      success: true,
      error: false,
      message: "URL generated successfully",
    });
  } catch (err) {
    console.error("API Error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
