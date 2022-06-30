import $ from '../core';

$.prototype.setAttr = function(name, value) {
    if (!name || !value) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(name, value);
    }
    return this;
};

$.prototype.getAttr = function(attributeName) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(attributeName)) {
            return this;
        }
        
        return this[i].getAttribute(attributeName);
    }
    return this;
};

$.prototype.removeAttr = function(attributeName) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(attributeName)) {
            return this;
        }
        
        return this[i].removeAttribute(attributeName);
    }
    return this;
};