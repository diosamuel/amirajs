/*! AmiraJS | (c) Muhammad Fauzan | github.com/fauzan121002/amirajs/license.md */ 
function build(){
    var amira = function(selector) {
        this.elements = typeof selector === "object" ? selector : 
            Array.prototype.slice.call(document.querySelectorAll(selector));
    }

    amira.prototype = {
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
            console.log(this.elements);
            this.elements.forEach(t => {
                t.setAttribute(a, s);
            });
            return this;
        },
        removeAttr: function(a) {
            this.elements.forEach(t => {
                t.removeAttribute(a);
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

    return function (selector) {
        return new amira(selector);
    };
};

if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = build();
} else if (typeof define === 'function' && define.amd) {
    define(build);
} else {
    window.$ = build();
}