"use strict";

module.exports = function (babel) {
  const { types: t } = babel;

  return {
    visitor: {
      MemberExpression: {
        exit({ node }) {
          const prop = node.property;
          if (
            !node.computed &&
            prop.name === 'default'
          ) {
            console.log(prop)
            // foo.default -> foo["default"]
            node.property = t.stringLiteral(prop.name)
            node.computed = true;
          }
        },
      },
    }
  };
}

