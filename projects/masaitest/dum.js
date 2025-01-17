import express from "express";

let app = express();

let PORT = 2001;

app.use(express.json());

function FindFirstUnique(str) {
    let charCount = {};
    let n = str.length;
    
    for (let i = 0; i < n; i++) {
        charCount[str[i]] = (charCount[str[i]] || 0) + 1;
    }

    for (let i = 0; i < n; i++) {
        if (charCount[str[i]] === 1) {
            return i;
        }
    }

    return -1;
}

app.post("/first", async (req, res) => {
    try {
        let text_to_process = req.body.text; 
        let ans = FindFirstUnique(text_to_process);
        
        
        return res.json({
            "First_Unique_Char": text_to_process[ans],
            "First_Unique_index": ans,
            "TimeStamp": new Date().toISOString()
        });
    } catch (error) {
        console.log("Error found:", error);
        return res.status(500).send("Something went wrong.");
    }
});



app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
