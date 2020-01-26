var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var marginTop="marginTop";var marginRight="marginRight";var marginBottom="marginBottom";var marginLeft="marginLeft";var paddingTop="paddingTop";var paddingRight="paddingRight";var paddingBottom="paddingBottom";var paddingLeft="paddingLeft";var spaceBreakpoints=[5,10,15,20,25,50,100];var marginDirections=[{label:"t",value:[marginTop]},{label:"r",value:[marginRight]},{label:"b",value:[marginBottom]},{label:"l",value:[marginLeft]},{label:"x",value:[marginLeft,marginRight]},{label:"y",value:[marginTop,marginBottom]},{label:"",value:[marginTop,marginRight,marginBottom,marginLeft]}];var paddingDirections=[{label:"t",value:[paddingTop]},{label:"r",value:[paddingRight]},{label:"b",value:[paddingBottom]},{label:"l",value:[paddingLeft]},{label:"x",value:[paddingLeft,paddingRight]},{label:"y",value:[paddingTop,paddingBottom]},{label:"",value:[paddingTop,paddingRight,paddingBottom,paddingLeft]}];var marginLayouts={};var paddingLayouts={};marginDirections.forEach(function(dir){spaceBreakpoints.forEach(function(bp){marginLayouts["m"+dir.label+bp]=dir.value.reduce(function(acc,cur){acc[cur]=bp;return acc;},{});});});paddingDirections.forEach(function(dir){spaceBreakpoints.forEach(function(bp){paddingLayouts["p"+dir.label+bp]=dir.value.reduce(function(acc,cur){acc[cur]=bp;return acc;},{});});});var stylesheet=_objectSpread({},marginLayouts,{},paddingLayouts);module.exports=stylesheet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZXMvbWFyZ2luQW5kUGFkZGluZy5qcyJdLCJuYW1lcyI6WyJtYXJnaW5Ub3AiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0Iiwic3BhY2VCcmVha3BvaW50cyIsIm1hcmdpbkRpcmVjdGlvbnMiLCJsYWJlbCIsInZhbHVlIiwicGFkZGluZ0RpcmVjdGlvbnMiLCJtYXJnaW5MYXlvdXRzIiwicGFkZGluZ0xheW91dHMiLCJmb3JFYWNoIiwiZGlyIiwiYnAiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJzdHlsZXNoZWV0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjA5QkFDQSxHQUFNQSxDQUFBQSxTQUFTLENBQUcsV0FBbEIsQ0FDQSxHQUFNQyxDQUFBQSxXQUFXLENBQUcsYUFBcEIsQ0FDQSxHQUFNQyxDQUFBQSxZQUFZLENBQUcsY0FBckIsQ0FDQSxHQUFNQyxDQUFBQSxVQUFVLENBQUcsWUFBbkIsQ0FFQSxHQUFNQyxDQUFBQSxVQUFVLENBQUcsWUFBbkIsQ0FDQSxHQUFNQyxDQUFBQSxZQUFZLENBQUcsY0FBckIsQ0FDQSxHQUFNQyxDQUFBQSxhQUFhLENBQUcsZUFBdEIsQ0FDQSxHQUFNQyxDQUFBQSxXQUFXLENBQUcsYUFBcEIsQ0FFQSxHQUFNQyxDQUFBQSxnQkFBZ0IsQ0FBRyxDQUFDLENBQUQsQ0FBSSxFQUFKLENBQVEsRUFBUixDQUFZLEVBQVosQ0FBZ0IsRUFBaEIsQ0FBb0IsRUFBcEIsQ0FBd0IsR0FBeEIsQ0FBekIsQ0FFQSxHQUFNQyxDQUFBQSxnQkFBZ0IsQ0FBRyxDQUN2QixDQUFFQyxLQUFLLENBQUUsR0FBVCxDQUFjQyxLQUFLLENBQUUsQ0FBQ1gsU0FBRCxDQUFyQixDQUR1QixDQUV2QixDQUFFVSxLQUFLLENBQUUsR0FBVCxDQUFjQyxLQUFLLENBQUUsQ0FBQ1Ys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biAmIHBhZGRpbmcgZGlyZWN0aW9uc1xuY29uc3QgbWFyZ2luVG9wID0gXCJtYXJnaW5Ub3BcIjtcbmNvbnN0IG1hcmdpblJpZ2h0ID0gXCJtYXJnaW5SaWdodFwiO1xuY29uc3QgbWFyZ2luQm90dG9tID0gXCJtYXJnaW5Cb3R0b21cIjtcbmNvbnN0IG1hcmdpbkxlZnQgPSBcIm1hcmdpbkxlZnRcIjtcblxuY29uc3QgcGFkZGluZ1RvcCA9IFwicGFkZGluZ1RvcFwiO1xuY29uc3QgcGFkZGluZ1JpZ2h0ID0gXCJwYWRkaW5nUmlnaHRcIjtcbmNvbnN0IHBhZGRpbmdCb3R0b20gPSBcInBhZGRpbmdCb3R0b21cIjtcbmNvbnN0IHBhZGRpbmdMZWZ0ID0gXCJwYWRkaW5nTGVmdFwiO1xuXG5jb25zdCBzcGFjZUJyZWFrcG9pbnRzID0gWzUsIDEwLCAxNSwgMjAsIDI1LCA1MCwgMTAwXTtcblxuY29uc3QgbWFyZ2luRGlyZWN0aW9ucyA9IFtcbiAgeyBsYWJlbDogXCJ0XCIsIHZhbHVlOiBbbWFyZ2luVG9wXSB9LFxuICB7IGxhYmVsOiBcInJcIiwgdmFsdWU6IFttYXJnaW5SaWdodF0gfSxcbiAgeyBsYWJlbDogXCJiXCIsIHZhbHVlOiBbbWFyZ2luQm90dG9tXSB9LFxuICB7IGxhYmVsOiBcImxcIiwgdmFsdWU6IFttYXJnaW5MZWZ0XSB9LFxuICB7IGxhYmVsOiBcInhcIiwgdmFsdWU6IFttYXJnaW5MZWZ0LCBtYXJnaW5SaWdodF0gfSxcbiAgeyBsYWJlbDogXCJ5XCIsIHZhbHVlOiBbbWFyZ2luVG9wLCBtYXJnaW5Cb3R0b21dIH0sXG4gIHsgbGFiZWw6IFwiXCIsIHZhbHVlOiBbbWFyZ2luVG9wLCBtYXJnaW5SaWdodCwgbWFyZ2luQm90dG9tLCBtYXJnaW5MZWZ0XSB9XG5dO1xuY29uc3QgcGFkZGluZ0RpcmVjdGlvbnMgPSBbXG4gIHsgbGFiZWw6IFwidFwiLCB2YWx1ZTogW3BhZGRpbmdUb3BdIH0sXG4gIHsgbGFiZWw6IFwiclwiLCB2YWx1ZTogW3BhZGRpbmdSaWdodF0gfSxcbiAgeyBsYWJlbDogXCJiXCIsIHZhbHVlOiBbcGFkZGluZ0JvdHRvbV0gfSxcbiAgeyBsYWJlbDogXCJsXCIsIHZhbHVlOiBbcGFkZGluZ0xlZnRdIH0sXG4gIHsgbGFiZWw6IFwieFwiLCB2YWx1ZTogW3BhZGRpbmdMZWZ0LCBwYWRkaW5nUmlnaHRdIH0sXG4gIHsgbGFiZWw6IFwieVwiLCB2YWx1ZTogW3BhZGRpbmdUb3AsIHBhZGRpbmdCb3R0b21dIH0sXG4gIHsgbGFiZWw6IFwiXCIsIHZhbHVlOiBbcGFkZGluZ1RvcCwgcGFkZGluZ1JpZ2h0LCBwYWRkaW5nQm90dG9tLCBwYWRkaW5nTGVmdF0gfVxuXTtcbmNvbnN0IG1hcmdpbkxheW91dHMgPSB7fTtcbmNvbnN0IHBhZGRpbmdMYXlvdXRzID0ge307XG5cbi8vIGNyZWF0aW5nIG1hcmdpbiBjb21ib3Ncbm1hcmdpbkRpcmVjdGlvbnMuZm9yRWFjaChkaXIgPT4ge1xuICBzcGFjZUJyZWFrcG9pbnRzLmZvckVhY2goYnAgPT4ge1xuICAgIG1hcmdpbkxheW91dHNbYG0ke2Rpci5sYWJlbH0ke2JwfWBdID0gZGlyLnZhbHVlLnJlZHVjZSgoYWNjLCBjdXIpID0+IHtcbiAgICAgIGFjY1tjdXJdID0gYnA7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgfSk7XG59KTtcblxuLy8gY3JlYXRpbmcgcGFkZGluZyBjb21ib3NcbnBhZGRpbmdEaXJlY3Rpb25zLmZvckVhY2goZGlyID0+IHtcbiAgc3BhY2VCcmVha3BvaW50cy5mb3JFYWNoKGJwID0+IHtcbiAgICBwYWRkaW5nTGF5b3V0c1tgcCR7ZGlyLmxhYmVsfSR7YnB9YF0gPSBkaXIudmFsdWUucmVkdWNlKChhY2MsIGN1cikgPT4ge1xuICAgICAgYWNjW2N1cl0gPSBicDtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICB9KTtcbn0pO1xuXG5jb25zdCBzdHlsZXNoZWV0ID0ge1xuICAvLyBNQVJHSU5cbiAgLi4ubWFyZ2luTGF5b3V0cyxcblxuICAvLyBQQURESU5HXG4gIC4uLnBhZGRpbmdMYXlvdXRzXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlc2hlZXQ7XG4iXX0=