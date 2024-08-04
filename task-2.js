'use strict'
class Storage {
	#items // Prywatna właściwość przechowująca towary

	constructor(initialItems) {
		this.#items = initialItems // Inicjalizacja prywatnej właściwości wartością początkową
	}
	getItems() {
		return this.#items // Zwraca aktualną listę towarów
	}
	addItem(newItem) {
		this.#items.push(newItem) // Dodaje nowy towar do listy
	}
	removeItem(itemToRemove) {
		this.#items = this.#items.filter(item => item !== itemToRemove) // Usuwa towar z listy
	}
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
