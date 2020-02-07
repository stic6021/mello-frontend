class Card {
  constructor(text) {
    this.text = text;
    this.id = ++Card.lastId;
  }
}

Card.lastId = 0;

class List {
  constructor(title) {
    this.title = title;
    this.cards = [];
    this.id = ++List.lastId;
  }

  addCard(text) {
    this.cards.push(new Card(text));
  }

  findCard(cardId) {
    return this.cards.find(function(card) {
      return cardId === card.id;
    });
  }
}

List.lastId = 0;

class Board {
  constructor() {
    this.lists = [];
    this.id = ++Board.lastId;
  }

  addList(text) {
    this.lists.push(new List(text));
  }

  findList(listId) {
    return this.lists.find(function(list) {
      return listId === list.id;
    });
  }

  editList(listId, newTitle) {
    var list = this.findList(listId);
    if (list) {
      list.title = newTitle;
    }
  }

  addCard(listId, text) {
    var list = this.findList(listId);
    if (list) {
      list.addCard(text);
    }
  }

  editCard(cardId, text) {
    this.lists.forEach(function(list) {
      var card = list.findCard(cardId);
      if (card) {
        card.text = text;
      }
    });
  }
}

Board.lastId = 0;
