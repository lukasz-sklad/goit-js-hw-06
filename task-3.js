'use strict'
class StringBuilder {
	#value // Prywatna właściwość przechowująca ciąg znaków

	constructor(initialValue) {
		this.#value = initialValue // Inicjalizacja prywatnej właściwości wartością początkową
	}
	getValue() {
		return this.#value // Zwraca aktualną wartość ciągu znaków
	}
	padStart(str) {
		this.#value = str + this.#value // Dodaje ciąg znaków na początku wartości
	}
	padEnd(str) {
		this.#value = this.#value + str // Dodaje ciąg znaków na końcu wartości
	}
	padBoth(str) {
		this.#value = str + this.#value + str // Dodaje ciąg znaków na początku i na końcu wartości
	}
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
