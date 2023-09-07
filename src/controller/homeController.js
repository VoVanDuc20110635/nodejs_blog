import pool from "../configs/connectDB";
let getHomepage = async (req, res) => {
    
    const [rows, fields] = await pool.execute('select * from users');
    return res.render('index.ejs', { dataUser: rows });
}

let getDetailPage = async (req, res) => {
    let userId = req.params.id; 
    // console.log("userId: ", userId);
    let user = await pool.execute(`select * from users where id = ?`, [userId]);
    return res.send(JSON.stringify(user[0]));
}

let createNewUser = async(req, res) => {
    console.log('check req: ', req.body);
    let {firstName, lastName, email, address} = req.body;
    await pool.execute('insert into users(firstName, lastName, email, address) values (?,?,?,?)',
        [firstName, lastName, email, address]);
    return res.redirect('/');
}

let deleteUser = async(req, res) =>{
    let userId = req.body.userId;
    await pool.execute('delete from users where id = ?', [userId]);
    return res.redirect('/'); 
}

let getEditUser = async(req, res) => {
    // console.log('edit user id: ', req.params.id);
    let id = req.params.id;
    let [user]  = await pool.execute(`select * from users where id  = ?`, [id]);
    return res.render('update.ejs', {dataUser: user[0]}); 
}

let postUpdateUser = async (req, res) =>{
    let {userId, firstName, lastName, email, address } = req.body;
    console.log(firstName, lastName, email, address, userId);
    await pool.execute(`update users set firstName = ?, lastName= ?, email = ?, address = ? where id = ?`, 
        [firstName, lastName, email, address, userId]);
    // return res.redirect(`/edit-user/${userId}`);
    return res.redirect('/');
}

module.exports = {
    getHomepage,
    getDetailPage,
    createNewUser,
    deleteUser,
    getEditUser,
    postUpdateUser
}