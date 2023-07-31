// console.log("hello");
const express=require('express');
const cors=require('cors');
const multer = require('multer');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');


async function main() {
  await mongoose.connect('mongodb+srv://sivateja:sivateja@facultydairy.wqm3eo7.mongodb.net/test');
  // await mongoose.connect('mongodb://0.0.0.0:27017/demo');
  console.log('db.connected');
}

main().catch(err => console.log(err));

const server=express();

server.use(bodyParser.json());
server.use(cors());
const userSchema = new mongoose.Schema({
    username: String,
    password: String
  });

  // const fs = require('fs');  
  // server.get('/path/to/file', (req, res) => {
  //   const file = __dirname + '/path/to/file';
  //   const filename = 'filename.txt';
  //   const mimetype = 'text/plain';
  
  //   res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  //   res.setHeader('Content-type', mimetype);
  
  //   const filestream = fs.createReadStream(file);
  //   filestream.pipe(res);
  // });
  const insertinggschema=new mongoose.Schema({
    employeeID: String,
    date: Date,
    stime: String,
    etime: String,
    class: String,
    description: String
  })
  const dairscheddule=new mongoose.Schema({
    employeeID: String,
    ddate: Date,
    dstime: String,
    detime: String,
    dclass: String,
    ddescription: String
  })
  const fileSchema = new mongoose.Schema({
    name: String,
    size: Number,
    mimetype: String,
    path: String
  });
  const employeeSchema = new mongoose.Schema({
    employeeID: String,
    firstName: String,
    lastName: String,
    dob: Date,
    nationality: String,
    aadharNo: String,
    mobile: String,
    email: String,
    state: String,
    city: String,
    residence: String,
    pincode: String,
    qualifications: String,
    experience: String,
    expertise: String,
    password: String,
    cpassword:String,
    designation:String,
    certificate1:String,
    certificate2:String,
    certificate3:String,
    certificate4:String,
    certificate5:String,
    school:String,
    inter:String,
    degree:String,
    workshop1:String,
    workshop2:String

  });

const User = mongoose.model('User', userSchema);

const Employee = mongoose.model('Employ', employeeSchema);
const nnschedule=mongoose.model('nschedule',insertinggschema);
const ddschedule=mongoose.model('ndairyschedule',dairscheddule);
const File = mongoose.model('File', fileSchema);


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/');
  },
  filename: function (req, file, cb) {
    cb(null,  Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });
server.post('/demo3', upload.single('file'), async (req, res) => {
  try {
    const file = new File({
      name: req.file.originalname,
      size: req.file.size,
      mimetype: req.file.mimetype,
      path: req.file.path
    });
    await file.save();
    res.status(201).send(file);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

server.post('/demo',async (req,res)=>{
    let user=new Employee();
    console.log(req.bodyfirstName);
    user.employeeID=req.body.employeeID;
    user.firstName=req.body.firstName;
    user.lastName=req.body.lastName;
    user.dob=req.body.dob;
    user.nationality=req.body.nationality;
    user.aadharNo=req.body.aadharNo;
    user.mobile=req.body.mobile;
    user.email=req.body.email;
    user.state=req.body.state;
    user.city=req.body.city;
    user.residence=req.body.residence;
    user.pincode=req.body.pincode;
    user.qualifications=req.body.qualifications
    user.experience=req.body.experience;
    user.expertise=req.body.expertise;
    user.password=req.body.password;
    user.cpassword=req.body.cpassword;
    user.certificate1=req.body.certificate1;
    user.certificate2=req.body.certificate2;
    user.certificate3=req.body.certificate3;
    user.certificate4=req.body.certificate4;
    user.certificate5=req.body.certificate5;
    user.designation=req.body.designation;
    user.school=req.body.school;
    user.inter=req.body.inter;
    user.degree=req.body.degree;


    const doc= await user.save();
   
    // res.json(doc);
    // console.log(req.body);
    // res.json(req.body);
})
server.post('/demo1',async (req,res)=>{
  let insertingg=new nnschedule();
  // console.log(req.body);
  insertingg.employeeID=req.body.employeeID;
  
  insertingg.date=req.body.date;
  insertingg.stime=req.body.stime;
  insertingg.etime=req.body.etime;
  insertingg.class=req.body.class;
  insertingg.description=req.body.description;
  const doc= await insertingg.save();
})
server.post('/demo2',async (req,res)=>{
  let insert=new ddschedule();
  console.log(req.body);
  insert.employeeID=req.body.employeeID;
  
  insert.ddate=req.body.ddate;
  insert.dstime=req.body.dstime;
  insert.detime=req.body.detime;
  insert.dclass=req.body.dclass;
  insert.ddescription=req.body.ddescription;
  const doc= await insert.save();
})


server.get('/demo',async (req,res)=>{
    const docs= await Employee.find({});
    res.json(docs);
})
server.get('/demo1',async (req,res)=>{
  const docs= await nnschedule.find({});
  res.json(docs);
})

server.get('/demo2',async (req,res)=>{
  const docs= await ddschedule.find({});
  res.json(docs);
})
server.get('/demo3',async (req,res)=>{
  const docs= await File.find({});
  res.json(docs);
})

// server.put('/demo/:id', async (req, res) => {
//   const id = req.params.id;
//   const user = await User.findById(id);
//   if (!user) {
//     return res.status(404).json({ message: 'User not found' });
//   }
//   user.username = req.body.username;
//   user.password = req.body.password;
//   const doc = await user.save();
//   console.log(doc);
//   res.json(doc);
// });

// // Delete User
// server.delete('/demo/:id', async (req, res) => {
//   const id = req.params.id;
//   const result = await User.deleteOne({ _id: id });
//   console.log(result);
//   res.json(result);
// });


server.listen(8090,()=>{
    console.log('server started');
})