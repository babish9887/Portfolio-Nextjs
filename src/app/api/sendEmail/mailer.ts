import nodemailer from 'nodemailer'
export const sendEmail = async (data:any) => {
    try {
      
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASSWORD
            },                

        });

 
          const  message = `
        <p>Hello Babish Chaudhary,</p>
<p>You got a new message from ${data.from_name}:</p>
<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">${data.message}</p>
<p>Contact Details:<br>- Email: ${data.from_email}</p>
        `


        const mailOptions = {
            from: data.company_email,
            to: "babishchaudhary.dev@gmail.com",
            subject: `Message from ${data.from_name}`,
            html: message,
        }

        const mailresponse = await transporter.sendMail
            (mailOptions);
        return mailresponse;
    } catch (error: any) {
        console.log(error.message)
    }
}