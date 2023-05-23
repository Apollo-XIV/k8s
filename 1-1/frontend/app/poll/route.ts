import { NextResponse } from "next/server";

const Redis = require('ioredis');
const redis = new Redis({
    host: 'localhost',
    port: 6379,
    password: ''
})

redis.set('foo','bar');

export async function GET() {
    const reply = redis.get('foo');
    const race = new Promise((res) => setTimeout(() => res("FAILURE"), 5000));
    const outcome = await Promise.race([reply, race]);
    if (outcome == "FAILURE") {return new Response("lost")};
    return new Response(outcome=='bar' ? "healthy" : "degraded");
}

