import { SECRET_KEY } from "../../helper/const";

export default async function handler(req, res) {
    const { query, body, method } = req;
    const { email, captcha } = body;

    if (req.method === "POST") {
        try {
            const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${query.captcha}`,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
                    },
                    method: "POST",
                }
            )
            const captchaValidation = await response.json();
            if (captchaValidation.success) {
                res.status(200).json({ data: captchaValidation, message: "Valid captcha code." })
            } else {
                res.status(422).json({ data: captchaValidation, message: "Unproccesable request, Invalid captcha code." })
            }
        } catch (error) {
            console.log("error : ", error)
            res.status(422).json({
                data: [],
                message: "Unproccesable request, Invalid captcha code.",
            });
        }
    }
}