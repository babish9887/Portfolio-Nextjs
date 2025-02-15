import { NextRequest, NextResponse } from "next/server"
import { sendEmail } from "./mailer"


 async function SendEmail(req:NextRequest){
    try{

        const data=await req.json()
        const emailStatus=await sendEmail(data)
        console.log(emailStatus)
        if(emailStatus?.accepted.length==0){
            return NextResponse.json({success:false, message:"Failed to send Email"},{status:400})
        }
        return NextResponse.json({success:true, message:"Your Message Sent Successfully"},{status:200})
    } catch(e:any){
        console.log(e)
        return NextResponse.json({success:true, message:"Internal Server Error"},{status:500})
        
    }
}

export {SendEmail as GET, SendEmail as POST}