module.exports = {
    LOGIN: "SELECT `id`, `email` FROM `user` WHERE `email` = ? AND `pass` = ?; ",
    UPDATETOKEN: "UPDATE `user` SET `token`= ? ,`time`= ? WHERE `email`= ? ;",
    CREATEUSER: "INSERT INTO `user`(`id`, `email`, `pass`, `name`, `tel`, `token`, `time`) VALUES (?,?,?,?,?,?,?);",
    UPDATEUSER: "UPDATE `user` SET `email`= ? ,`name`= ? ,`tel`= ? WHERE `token`= ? ;",
    UPDATEPASS: "UPDATE `user` SET `pass`= ? WHERE `id`= ? AND `pass`= ? ",
    GETUSERBYTOKEN: "SELECT user.id,user.tel,user.name,user.email,user.time FROM user where user.token = ? ;",
    GETUSERBYID: "SELECT user.name,user.tel,user.email FROM user where user.id = ? ;",
    GETMAXUSER: "SELECT MAX(user.id) as `maxid` FROM user;",
    GETUSERCONSIST: "SELECT user.email FROM user where user.email = ? ;",
    // SEARCHITEMS: "SELECT item.id, item.created_at, item.title, item.price, item.image, item.user FROM item WHERE ? ORDER BY ? ?;",
    SEARCHUSER: "SELECT user.id, user.tel, user.name, user.email FROM user WHERE MATCH (email,name) AGAINST (` ? IN BOOLEAN MODE`);",
    GETTOKENTIME: "SELECT user.time, user.id FROM user where user.token = ? ;",
    GETITEMBYID: "SELECT item.id, item.created_at, item.title, item.price, item.image, item.user FROM item where item.id = ? ;",
    UPDATEITEM: "UPDATE `item` SET `title` = ? , `price` = ? WHERE `id` = ? ;",
    DELETEITEM: "DELETE FROM `item` WHERE `id` = ? ;",
    GETMAXITEM: "SELECT MAX(item.id) as `maxid` FROM item;",
    CREATEITEM: "INSERT INTO `item`(`id`, `created_at`, `title`, `price`, `image`, `user`) VALUES (?,?,?,?,?,?);",
    UPDATEIMAGE: "UPDATE `item` SET `image`=? WHERE `id` = ? ;"
}
