var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _react=_interopRequireDefault(require("react"));var _reactNativeVectorIcons=require("react-native-vector-icons");var _propTypes=_interopRequireDefault(require("prop-types"));var _theme=_interopRequireWildcard(require("./theme"));var _getIconType=_interopRequireDefault(require("./helpers/getIconType"));var _galio=_interopRequireDefault(require("./config/galio.json"));var _galioExtra=_interopRequireDefault(require("./config/galioExtra.json"));var _jsxFileName="/Users/jasonbarnett/code/forks/galio/src/Icon.js";var Galio=(0,_reactNativeVectorIcons.createIconSetFromIcoMoon)(_galio.default,'Galio','./fonts/galio.ttf');var GalioExtra=(0,_reactNativeVectorIcons.createIconSetFromIcoMoon)(_galioExtra.default,'GalioExtra','./fonts/galioExtra.ttf');function Icon(_ref){var name=_ref.name,family=_ref.family,size=_ref.size,color=_ref.color,styles=_ref.styles,theme=_ref.theme,rest=(0,_objectWithoutProperties2.default)(_ref,["name","family","size","color","styles","theme"]);if(family==='Galio'){if(name){return _react.default.createElement(Galio,(0,_extends2.default)({name:name,size:size||theme.SIZES.BASE,color:color||theme.COLORS.BLACK},rest,{__source:{fileName:_jsxFileName,lineNumber:26}}));}}else if(family==='GalioExtra'){if(name){return _react.default.createElement(GalioExtra,(0,_extends2.default)({name:name,size:size||theme.SIZES.BASE,color:color||theme.COLORS.BLACK},rest,{__source:{fileName:_jsxFileName,lineNumber:37}}));}}else{var IconInstance=(0,_getIconType.default)(family);if(name&&IconInstance){return _react.default.createElement(IconInstance,(0,_extends2.default)({name:name,size:size||theme.SIZES.BASE,color:color||theme.COLORS.BLACK},rest,{__source:{fileName:_jsxFileName,lineNumber:49}}));}}return null;}Icon.defaultProps={name:null,family:null,size:null,color:null,styles:{},theme:_theme.default};Icon.propTypes={name:_propTypes.default.string.isRequired,family:_propTypes.default.string.isRequired,size:_propTypes.default.number,color:_propTypes.default.string,styles:_propTypes.default.any,theme:_propTypes.default.any};var _default=(0,_theme.withStyles)(Icon);exports.default=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JY29uLmpzIl0sIm5hbWVzIjpbIkdhbGlvIiwiZ2FsaW9Db25maWciLCJHYWxpb0V4dHJhIiwiZ2FsaW9FeHRyYUNvbmZpZyIsIkljb24iLCJuYW1lIiwiZmFtaWx5Iiwic2l6ZSIsImNvbG9yIiwic3R5bGVzIiwidGhlbWUiLCJyZXN0IiwiU0laRVMiLCJCQVNFIiwiQ09MT1JTIiwiQkxBQ0siLCJJY29uSW5zdGFuY2UiLCJkZWZhdWx0UHJvcHMiLCJKYXl0ZWNoVGhlbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwiYW55Il0sIm1hcHBpbmdzIjoid2JBQUEsb0RBQ0EsaUVBQ0EsNkRBRUEsdURBQ0EsMEVBRUEsa0VBQ0EsNEUsb0VBRUEsR0FBTUEsQ0FBQUEsS0FBSyxDQUFHLHFEQUF5QkMsY0FBekIsQ0FBc0MsT0FBdEMsQ0FBK0MsbUJBQS9DLENBQWQsQ0FDQSxHQUFNQyxDQUFBQSxVQUFVLENBQUcscURBQ2pCQyxtQkFEaUIsQ0FFakIsWUFGaUIsQ0FHakIsd0JBSGlCLENBQW5CLENBVUEsUUFBU0MsQ0FBQUEsSUFBVCxNQUFxRSxJQUFyREMsQ0FBQUEsSUFBcUQsTUFBckRBLElBQXFELENBQS9DQyxNQUErQyxNQUEvQ0EsTUFBK0MsQ0FBdkNDLElBQXVDLE1BQXZDQSxJQUF1QyxDQUFqQ0MsS0FBaUMsTUFBakNBLEtBQWlDLENBQTFCQyxNQUEwQixNQUExQkEsTUFBMEIsQ0FBbEJDLEtBQWtCLE1BQWxCQSxLQUFrQixDQUFSQyxJQUFRLCtGQUNuRSxHQUFJTCxNQUFNLEdBQUssT0FBZixDQUF3QixDQUN0QixHQUFJRCxJQUFKLENBQVUsQ0FDUixNQUNFLDhCQUFDLEtBQUQsd0JBQ0UsSUFBSSxDQUFFQSxJQURSLENBRUUsSUFBSSxDQUFFRSxJQUFJLEVBQUlHLEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxJQUY1QixDQUdFLEtBQUssQ0FBRUwsS0FBSyxFQUFJRSxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsS0FIL0IsRUFJTUosSUFKTixtREFERixDQVFELENBQ0YsQ0FYRCxJQVdPLElBQUlMLE1BQU0sR0FBSyxZQUFmLENBQTZCLENBQ2xDLEdBQUlELElBQUosQ0FBVSxDQUNSLE1BQ0UsOEJBQUMsVUFBRCx3QkFDRSxJQUFJLENBQUVBLElBRFIsQ0FFRSxJQUFJLENBQUVFLElBQUksRUFBSUcsS0FBSyxDQUFDRSxLQUFOLENBQVlDLElBRjVCLENBR0UsS0FBSyxDQUFFTCxLQUFLLEVBQUlFLEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxLQUgvQixFQUlNSixJQUpOLG1EQURGLENBUUQsQ0FDRixDQVhNLElBV0EsQ0FDTCxHQUFNSyxDQUFBQSxZQUFZLENBQUcseUJBQVlWLE1BQVosQ0FBckIsQ0FDQSxHQUFJRCxJQUFJLEVBQUlXLFlBQVosQ0FBMEIsQ0FDeEIsTUFDRSw4QkFBQyxZQUFELHdCQUNFLElBQUksQ0FBRVgsSUFEUixDQUVFLElBQUksQ0FBRUUsSUFBSSxFQUFJRyxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsSUFGNUIsQ0FHRSxLQUFLLENBQUVMLEtBQUssRUFBSUUsS0FBSyxDQUFDSSxNQUFOLENBQWFDLEtBSC9CLEVBSU1KLElBSk4sbURBREYsQ0FRRCxDQUNGLENBRUQsTUFBTyxLQUFQLENBQ0QsQ0FFRFAsSUFBSSxDQUFDYSxZQUFMLENBQW9CLENBQ2xCWixJQUFJLENBQUUsSUFEWSxDQUVsQkMsTUFBTSxDQUFFLElBRlUsQ0FHbEJDLElBQUksQ0FBRSxJQUhZLENBSWxCQyxLQUFLLENBQUUsSUFKVyxDQUtsQkMsTUFBTSxDQUFFLEVBTFUsQ0FNbEJDLEtBQUssQ0FBRVEsY0FOVyxDQUFwQixDQVNBZCxJQUFJLENBQUNlLFNBQUwsQ0FBaUIsQ0FDZmQsSUFBSSxDQUFFZSxtQkFBVUMsTUFBVixDQUFpQkMsVUFEUixDQUVmaEIsTUFBTSxDQUFFYyxtQkFBVUMsTUFBVixDQUFpQkMsVUFGVixDQUdmZixJQUFJLENBQUVhLG1CQUFVRyxNQUhELENBSWZmLEtBQUssQ0FBRVksbUJBQVVDLE1BSkYsQ0FLZlosTUFBTSxDQUFFVyxtQkFBVUksR0FMSCxDQU1mZCxLQUFLLENBQUVVLG1CQUFVSSxHQU5GLENBQWpCLEMsYUFTZSxzQkFBV3BCLElBQVgsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVJY29uU2V0RnJvbUljb01vb24gfSBmcm9tICdyZWFjdC1uYXRpdmUtdmVjdG9yLWljb25zJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBKYXl0ZWNoVGhlbWUsIHsgd2l0aFN0eWxlcyB9IGZyb20gJy4vdGhlbWUnO1xuaW1wb3J0IGdldEljb25UeXBlIGZyb20gJy4vaGVscGVycy9nZXRJY29uVHlwZSc7XG5cbmltcG9ydCBnYWxpb0NvbmZpZyBmcm9tICcuL2NvbmZpZy9nYWxpby5qc29uJztcbmltcG9ydCBnYWxpb0V4dHJhQ29uZmlnIGZyb20gJy4vY29uZmlnL2dhbGlvRXh0cmEuanNvbidcblxuY29uc3QgR2FsaW8gPSBjcmVhdGVJY29uU2V0RnJvbUljb01vb24oZ2FsaW9Db25maWcsICdHYWxpbycsICcuL2ZvbnRzL2dhbGlvLnR0ZicpO1xuY29uc3QgR2FsaW9FeHRyYSA9IGNyZWF0ZUljb25TZXRGcm9tSWNvTW9vbihcbiAgZ2FsaW9FeHRyYUNvbmZpZyxcbiAgJ0dhbGlvRXh0cmEnLFxuICAnLi9mb250cy9nYWxpb0V4dHJhLnR0Zidcbik7XG5cbi8vIEdhbGlvIEZvbnRzIGhhdmUgdG8gYmUgbGlua2VkIHdpdGggJ3JlYWN0LW5hdGl2ZSBsaW5rJyBpZiB5b3UncmUgdXNpbmcgcmVhY3QtbmF0aXZlLWNsaVxuLy8gR2FsaW8gRm9udHMgaGF2ZSB0byBsb2FkZWQgd2l0aCBGb250cy5sb2FkQXN5bmMgaWYgeW91J3JlXG4vLyB1c2luZyBFeHBvICh5b3UgY2FuIGV4cG9ydCBHYWxpb0ZvbnQgZnJvbSBpbmRleCBpbiBvcmRlciB0byBpbXBvcnQgaXQpXG5cbmZ1bmN0aW9uIEljb24oeyBuYW1lLCBmYW1pbHksIHNpemUsIGNvbG9yLCBzdHlsZXMsIHRoZW1lLCAuLi5yZXN0IH0pIHtcbiAgaWYgKGZhbWlseSA9PT0gJ0dhbGlvJykge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8R2FsaW9cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIHNpemU9e3NpemUgfHwgdGhlbWUuU0laRVMuQkFTRX1cbiAgICAgICAgICBjb2xvcj17Y29sb3IgfHwgdGhlbWUuQ09MT1JTLkJMQUNLfVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZmFtaWx5ID09PSAnR2FsaW9FeHRyYScpIHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEdhbGlvRXh0cmFcbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIHNpemU9e3NpemUgfHwgdGhlbWUuU0laRVMuQkFTRX1cbiAgICAgICAgICBjb2xvcj17Y29sb3IgfHwgdGhlbWUuQ09MT1JTLkJMQUNLfVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgSWNvbkluc3RhbmNlID0gZ2V0SWNvblR5cGUoZmFtaWx5KTtcbiAgICBpZiAobmFtZSAmJiBJY29uSW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxJY29uSW5zdGFuY2VcbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIHNpemU9e3NpemUgfHwgdGhlbWUuU0laRVMuQkFTRX1cbiAgICAgICAgICBjb2xvcj17Y29sb3IgfHwgdGhlbWUuQ09MT1JTLkJMQUNLfVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIG5hbWU6IG51bGwsXG4gIGZhbWlseTogbnVsbCxcbiAgc2l6ZTogbnVsbCxcbiAgY29sb3I6IG51bGwsXG4gIHN0eWxlczoge30sXG4gIHRoZW1lOiBKYXl0ZWNoVGhlbWUsXG59O1xuXG5JY29uLnByb3BUeXBlcyA9IHtcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBmYW1pbHk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlczogUHJvcFR5cGVzLmFueSxcbiAgdGhlbWU6IFByb3BUeXBlcy5hbnksXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKEljb24pO1xuIl19