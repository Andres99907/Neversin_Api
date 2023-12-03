// models.js

class New_Notice 
{
    constructor(id, type, title, img, author, descript, paragraph) {
      this.id = id;
      this.type = type;
      this.title = title;
      this.img = img;
      this.author = author;
      this.descript = descript;
      this.paragraph = paragraph;
    }
}
  
  class Author {
    constructor(id, name, username) {
      this.id = id;
      this.name = name;
      this.username = username;
    }
  }

  class User 
  {
    constructor(id, username, name, birth) {
      this.id = id;
      this.type = type;
      this.username = username;
      this.name = name;
      this.birth = birth;
    }
  }
  
  module.exports = {
    New_Notice,
    Author,
    User
  };
  