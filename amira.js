/*! AmiraJS | (c) Muhammad Fauzan | github.com/fauzan121002/amirajs/license.md */ 
class Amira {

    // constructor for variable inside class object
    constructor(t) {
        (this.list = []), (this.built = document.querySelectorAll(t)), (this.nodeList = Array.prototype.forEach.call(this.built, (t) => this.list.push(t)));
    }

    // insert a value for input tag but also tags like div , span , textarea.
    insertValue(t) {
        this.list.forEach((i) => {
            void 0 !== i.innerHTML && (i.innerHTML = t), (i.value = t);
        });
    }

    // empty a value for input tag but also tags like div , span , textarea.
    emptyValue() {
        this.list.forEach((t) => {
            void 0 !== t.innerHTML && (t.innerHTML = ""), (t.value = "");
        });
    }

    // set attribute of a input tag but also tags like div , span , textarea.
    setAttribute(t, i) {
        this.list.forEach((s) => {
            s.setAttribute(t, i);
        });
    }

    // remove attribute of a input tag but also tags like div , span , textarea.
    removeAttribute(t) {
        this.list.forEach((i) => {
            i.removeAttribute(t);
        });
    }

    // show visibility of a input tag but also tags like div , span , textarea.
    show() {
        this.list.forEach((t) => {
            t.style.visibility = "visible";
        });
    }

    // hide visibility of a input tag but also tags like div , span , textarea.
    hide() {
        this.list.forEach((t) => {
            t.style.visibility = "hidden";
        });
    }
}
