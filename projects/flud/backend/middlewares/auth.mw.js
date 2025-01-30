let AuthMw = () => {
    return async function (req,res,next) {
        let token = req.headers.authorization.split(" ")[1]
        console.log(token)

        try {
             if(!token){
               res.status(401).json({msg : "Invalid req"})
            } else{
                let decode = jwt.verify(token,"shhhh")
                console.log(decode.userID);
            }
            next()
        } catch (error) {
            res.status(500).json({msg : "Internal Error"})
        }
    }
}

export {AuthMw}