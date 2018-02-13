import * as React from 'react';
import classNames from 'classnames';
import { GridBodyPanel } from './GridBodyPanel';
export class GridBody extends React.Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        let sameProps = false;
        if (this.props.mounted !== nextProps.mounted ||
            this.props.options !== nextProps.options ||
            this.props.CTInnerWidth !== nextProps.CTInnerWidth ||
            this.props.CTInnerHeight !== nextProps.CTInnerHeight ||
            this.props.colGroup !== nextProps.colGroup ||
            this.props.list !== nextProps.list ||
            this.props.scrollLeft !== nextProps.scrollLeft ||
            this.props.scrollTop !== nextProps.scrollTop ||
            this.props.selectionRows !== nextProps.selectionRows ||
            this.props.selectionCols !== nextProps.selectionCols ||
            this.props.focusedRow !== nextProps.focusedRow ||
            this.props.focusedCol !== nextProps.focusedCol ||
            this.props.isInlineEditing !== nextProps.isInlineEditing ||
            this.props.inlineEditingCell !== nextProps.inlineEditingCell) {
            sameProps = true;
        }
        return sameProps;
    }
    render() {
        const { mounted, styles, options, frozenColumnIndex, colGroup, asideColGroup, leftHeaderColGroup, headerColGroup, bodyTable, asideBodyRowData, asideBodyGroupingData, leftBodyRowData, leftBodyGroupingData, bodyRowData, bodyGroupingData, scrollLeft, scrollTop, CTInnerWidth, CTInnerHeight, list, onMouseDownBody } = this.props;
        if (!mounted)
            return null;
        const { bodyHeight, bodyTrHeight, asidePanelWidth, frozenPanelWidth, frozenPanelHeight, rightPanelWidth, footSumHeight } = styles;
        const { frozenRowIndex } = options;
        let scrollPaddingLeft = (headerColGroup[0]) ? headerColGroup[0]._sx - styles.frozenPanelWidth : 0;
        let topBodyScrollConfig = {
            frozenRowIndex: 0,
            sRowIndex: 0,
            eRowIndex: frozenRowIndex
        };
        let bodyScrollConfig = {
            frozenRowIndex: frozenRowIndex,
            sRowIndex: Math.floor(-scrollTop / bodyTrHeight) + frozenRowIndex,
            eRowIndex: (Math.floor(-scrollTop / bodyTrHeight) + frozenRowIndex) + Math.ceil(bodyHeight / bodyTrHeight) + 1
        };
        let topAsideBodyPanelStyle = {
            left: 0,
            width: asidePanelWidth,
            top: 0,
            height: frozenPanelHeight
        };
        let topLeftBodyPanelStyle = {
            left: asidePanelWidth,
            width: frozenPanelWidth,
            top: 0,
            height: frozenPanelHeight
        };
        let topBodyPanelStyle = {
            left: frozenPanelWidth + asidePanelWidth,
            width: CTInnerWidth - asidePanelWidth - frozenPanelWidth - rightPanelWidth,
            top: 0,
            height: frozenPanelHeight
        };
        let asideBodyPanelStyle = {
            left: 0,
            width: asidePanelWidth,
            top: frozenPanelHeight,
            height: bodyHeight - frozenPanelHeight - footSumHeight
        };
        let leftBodyPanelStyle = {
            left: asidePanelWidth,
            width: frozenPanelWidth,
            top: frozenPanelHeight,
            height: bodyHeight - frozenPanelHeight - footSumHeight
        };
        let bodyPanelStyle = {
            left: frozenPanelWidth + asidePanelWidth,
            width: CTInnerWidth - asidePanelWidth - frozenPanelWidth - rightPanelWidth,
            top: frozenPanelHeight,
            height: bodyHeight - frozenPanelHeight - footSumHeight
        };
        return (React.createElement("div", { className: classNames('axd-body'), style: { height: styles.bodyHeight }, onMouseDown: e => onMouseDownBody(e) },
            (styles.asidePanelWidth > 0 && styles.frozenPanelHeight > 0) ? (React.createElement("div", { "data-scroll-container": 'top-aside-body-scroll-container', style: topAsideBodyPanelStyle },
                React.createElement(GridBodyPanel, { styles: this.props.styles, options: this.props.options, colGroup: this.props.colGroup, selectionRows: this.props.selectionRows, selectionCols: this.props.selectionCols, focusedRow: this.props.focusedRow, focusedCol: this.props.focusedCol, columnFormatter: this.props.columnFormatter, onDoubleClickCell: this.props.onDoubleClickCell, updateEditInput: this.props.updateEditInput, isInlineEditing: this.props.isInlineEditing, inlineEditingCell: this.props.inlineEditingCell, panelName: 'top-aside-body-scroll', panelColGroup: asideColGroup, panelBodyRow: asideBodyRowData, panelGroupRow: asideBodyGroupingData, list: list, panelScrollConfig: topBodyScrollConfig }))) : null,
            (styles.frozenPanelWidth > 0 && styles.frozenPanelHeight > 0) ? (React.createElement("div", { "data-scroll-container": 'top-left-body-scroll-container', style: topLeftBodyPanelStyle },
                React.createElement(GridBodyPanel, { styles: this.props.styles, options: this.props.options, colGroup: this.props.colGroup, selectionRows: this.props.selectionRows, selectionCols: this.props.selectionCols, focusedRow: this.props.focusedRow, focusedCol: this.props.focusedCol, columnFormatter: this.props.columnFormatter, onDoubleClickCell: this.props.onDoubleClickCell, updateEditInput: this.props.updateEditInput, isInlineEditing: this.props.isInlineEditing, inlineEditingCell: this.props.inlineEditingCell, panelName: 'top-left-body-scroll', panelColGroup: leftHeaderColGroup, panelBodyRow: leftBodyRowData, panelGroupRow: leftBodyGroupingData, list: list, panelScrollConfig: topBodyScrollConfig }))) : null,
            (styles.frozenPanelHeight > 0) ? (React.createElement("div", { "data-scroll-container": 'top-body-scroll-container', style: topBodyPanelStyle },
                React.createElement(GridBodyPanel, { styles: this.props.styles, options: this.props.options, colGroup: this.props.colGroup, selectionRows: this.props.selectionRows, selectionCols: this.props.selectionCols, focusedRow: this.props.focusedRow, focusedCol: this.props.focusedCol, columnFormatter: this.props.columnFormatter, onDoubleClickCell: this.props.onDoubleClickCell, updateEditInput: this.props.updateEditInput, isInlineEditing: this.props.isInlineEditing, inlineEditingCell: this.props.inlineEditingCell, panelName: 'top-body-scroll', panelColGroup: headerColGroup, panelBodyRow: bodyRowData, panelGroupRow: bodyGroupingData, list: list, panelScrollConfig: topBodyScrollConfig, panelLeft: scrollLeft, panelPaddingLeft: scrollPaddingLeft }))) : null,
            (styles.asidePanelWidth > 0) ? (React.createElement("div", { "data-scroll-container": 'aside-body-scroll-container', style: asideBodyPanelStyle },
                React.createElement(GridBodyPanel, { styles: this.props.styles, options: this.props.options, colGroup: this.props.colGroup, selectionRows: this.props.selectionRows, selectionCols: this.props.selectionCols, focusedRow: this.props.focusedRow, focusedCol: this.props.focusedCol, columnFormatter: this.props.columnFormatter, onDoubleClickCell: this.props.onDoubleClickCell, updateEditInput: this.props.updateEditInput, isInlineEditing: this.props.isInlineEditing, inlineEditingCell: this.props.inlineEditingCell, panelName: 'aside-body-scroll', panelColGroup: asideColGroup, panelBodyRow: asideBodyRowData, panelGroupRow: asideBodyGroupingData, list: list, panelScrollConfig: bodyScrollConfig, panelTop: scrollTop }))) : null,
            (styles.frozenPanelWidth > 0) ? (React.createElement("div", { "data-scroll-container": 'left-body-scroll-container', style: leftBodyPanelStyle },
                React.createElement(GridBodyPanel, { styles: this.props.styles, options: this.props.options, colGroup: this.props.colGroup, selectionRows: this.props.selectionRows, selectionCols: this.props.selectionCols, focusedRow: this.props.focusedRow, focusedCol: this.props.focusedCol, columnFormatter: this.props.columnFormatter, onDoubleClickCell: this.props.onDoubleClickCell, updateEditInput: this.props.updateEditInput, isInlineEditing: this.props.isInlineEditing, inlineEditingCell: this.props.inlineEditingCell, panelName: 'left-body-scroll', panelColGroup: leftHeaderColGroup, panelBodyRow: leftBodyRowData, panelGroupRow: leftBodyGroupingData, list: list, panelScrollConfig: bodyScrollConfig, panelTop: scrollTop }))) : null,
            React.createElement("div", { "data-scroll-container": 'body-scroll-container', style: bodyPanelStyle },
                React.createElement(GridBodyPanel, { styles: this.props.styles, options: this.props.options, colGroup: this.props.colGroup, selectionRows: this.props.selectionRows, selectionCols: this.props.selectionCols, focusedRow: this.props.focusedRow, focusedCol: this.props.focusedCol, columnFormatter: this.props.columnFormatter, onDoubleClickCell: this.props.onDoubleClickCell, isInlineEditing: this.props.isInlineEditing, inlineEditingCell: this.props.inlineEditingCell, updateEditInput: this.props.updateEditInput, panelName: 'body-scroll', panelColGroup: headerColGroup, panelBodyRow: bodyRowData, panelGroupRow: bodyGroupingData, list: list, panelScrollConfig: bodyScrollConfig, panelLeft: scrollLeft, panelTop: scrollTop, panelPaddingLeft: scrollPaddingLeft }))));
    }
}
// todo : 틀고정시 마우스 선택 포지션 다시 계산. 
