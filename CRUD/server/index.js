import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const Students = [{
    id: 1 , name:"Asfar"  , age:19 } ,
{id: 2 , name:"Rehman"  , age:20},
{id: 3 , name:"Shahid"  , age:19}, 
{id: 4 , name:"Kamal"  , age:21}];

app.get("/", (req, res) => {
  res.send("Hello Next js!");
  res.json({Students});
});

app.post("/post" , (req , res) => {
    const addStudent = async (req , res) => {
        const {id, name, age} = req.body;

        if (!id ||!name ||!age) {
            res.status(400).json({
                message:"All fields required",
            })
            return
        }
        const createStudent = Students.create({id , name , age});
        res.status(200).json({
            message:"Student created",
        });
    }
});

app.delete("delete/:id" , (req , res) => {
  const {id} = req.params;
  const deleteStudent = Students.splice(id, 1);
  res.status(200).json({message:"Student deleted Successfully",Students});
})


app.put("update/:id" , (req , res) => {
    const {id} = req.params;
    const updateStudent = 
    res.status(200).json({message:"Student deleted Successfully",Students});
  })
  

app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
});
