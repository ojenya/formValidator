/**
 * FormValidation (https://formvalidation.io), v1.3.0
 * The best validation library for JavaScript
 * (c) 2013 - 2018 Nguyen Huu Phuoc <me@phuoc.ng>
 */

(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
    ? define(factory)
    : ((global.FormValidation = global.FormValidation || {}),
      (global.FormValidation.plugins = global.FormValidation.plugins || {}),
      (global.FormValidation.plugins.Foundation = factory()));
})(this, function () {
  "use strict";

  var Framework = FormValidation.plugins.Framework;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError(
        "Super expression must either be null or a function, not " +
          typeof superClass
      );
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass);
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    }

    return call && (typeof call === "object" || typeof call === "function")
      ? call
      : self;
  };

  var Foundation = (function (_Framework) {
    inherits(Foundation, _Framework);

    function Foundation(opts) {
      classCallCheck(this, Foundation);
      return possibleConstructorReturn(
        this,
        (Foundation.__proto__ || Object.getPrototypeOf(Foundation)).call(
          this,
          Object.assign(
            {},
            {
              formClass: "fv-plugins-foundation",
              messageClass: "form-error",
              rowInvalidClass: "fv-row__error",
              rowPattern: /^.*((small|medium|large)-[0-9]+)\s.*(cell).*$/,
              rowSelector: ".grid-x",
              rowValidClass: "fv-row__success",
            },
            opts
          )
        )
      );
    }

    createClass(Foundation, [
      {
        key: "onIconPlaced",
        value: function onIconPlaced(e) {
          var type = e.element.getAttribute("type");
          if ("checkbox" === type || "radio" === type) {
            var nextEle = e.iconElement.nextSibling;
            if ("LABEL" === nextEle.nodeName) {
              nextEle.parentNode.insertBefore(
                e.iconElement,
                nextEle.nextSibling
              );
            } else if ("#text" === nextEle.nodeName) {
              var next = nextEle.nextSibling;
              if (next && "LABEL" === next.nodeName) {
                next.parentNode.insertBefore(e.iconElement, next.nextSibling);
              }
            }
          }
        },
      },
    ]);
    return Foundation;
  })(Framework);

  return Foundation;
});
