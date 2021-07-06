/*! AmiraJS | (c) Muhammad Fauzan | github.com/fauzan121002/amirajs/license.md */ 
window.$ = function(selector){
    return {
        elements: (function() {
            return typeof selector === "object" ? selector : 
            Array.prototype.slice.call(document.querySelectorAll(selector));
        })(),
        insert: function(s) {
            this.elements.forEach(t => {
                void 0 !== t.innerHTML && (t.innerHTML = s), (t.value = s);
            });
            return this;
        },
        empty: function() {
            this.elements.forEach(t => {
                void 0 !== t.innerHTML && (t.innerHTML = ""), (t.value = "");
            });
            return this;
        },
        setAttr: function(a,s) {
            this.elements.forEach(t => {
                t.setAttr(a, s);
            });
            return this;
        },
        removeAttr: function(a) {
            this.elements.forEach(t => {
                t.removeAttr(a);
            });
            return this;
        },
        show: function() {
            this.elements.forEach(t => {
                t.style.visibility = "visible";
            });
            return this;
        },
        hide: function() {
            this.elements.forEach(t => {
                t.style.visibility = "hidden";
            });
            return this;
        }
    }
}