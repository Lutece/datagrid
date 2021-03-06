"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const providers_1 = require("../providers");
function connectStore(WrappedComponent) {
    class Component extends React.Component {
        render() {
            return (React.createElement(providers_1.DataGridStore.Consumer, null, store => React.createElement(WrappedComponent, Object.assign({}, this.props, store))));
        }
    }
    return Component;
}
exports.default = connectStore;
//# sourceMappingURL=connectStore.js.map