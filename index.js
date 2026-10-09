const express = require("express") ;
const { status } = require("express/lib/response");
const healthRouter = require("/workspaces/CI-CD-with-Ansible/src/routes/health") ;

const app = express() ;

app.use(express.json()) ;

app.get("/", (req,res) => {
    res.status(200).json({
        application: "Demon-App",
        message: "Welcome to the Devops World!",
        version: "1.0.0",
        status: "running",
    })
});

app.use("/health",healthRouter) ;

app.use((req,res) => {
    res.status(404).json({
        status: "error",
        message: "route not found",
    })
});

app.listen(8000, () => {
    console.log(`Server is run on 8000 port no.`) ;
})