"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _HeaderSection = require('./HeaderSection/HeaderSection.js');

var _HeaderSection2 = _interopRequireDefault(_HeaderSection);

var _ContactMeSection = require('./ContactMeSection/ContactMeSection.js');

var _ContactMeSection2 = _interopRequireDefault(_ContactMeSection);

var _SkillsSection = require('./SkillsSection/SkillsSection.js');

var _SkillsSection2 = _interopRequireDefault(_SkillsSection);

var _AboutMeSection = require('./AboutMeSection/AboutMeSection.js');

var _AboutMeSection2 = _interopRequireDefault(_AboutMeSection);

var _HackathonSection = require('./HackathonsSection/HackathonSection.js');

var _HackathonSection2 = _interopRequireDefault(_HackathonSection);

var _StartupAcceleratorSection = require('./StartupAcceleratorSection/StartupAcceleratorSection.js');

var _StartupAcceleratorSection2 = _interopRequireDefault(_StartupAcceleratorSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/robert/Git/next-js-project/pages/index.js?entry';


var Index = function Index() {
	return _react2.default.createElement('div', {
		'data-jsx': 3875972279,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, _react2.default.createElement(_semanticUiReact.Button, {
		color: 'red',
		content: 'Like',
		icon: 'heart',
		label: { basic: true, color: 'red', pointing: 'left', content: '2,048' },
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}), _react2.default.createElement(_HeaderSection2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}), _react2.default.createElement(_AboutMeSection2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}), _react2.default.createElement(_SkillsSection2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}), _react2.default.createElement(_HackathonSection2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	}), _react2.default.createElement(_StartupAcceleratorSection2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}), _react2.default.createElement(_ContactMeSection2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}), _react2.default.createElement(_style2.default, {
		styleId: 3875972279,
		css: 'body{color:black;font-family:courier}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCd0IsQUFHdUIsWUFDUSxvQkFDdEIiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3JvYmVydC9HaXQvbmV4dC1qcy1wcm9qZWN0Iiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQgSGVhZGVyU2VjdGlvbiBmcm9tIFwiLi9IZWFkZXJTZWN0aW9uL0hlYWRlclNlY3Rpb24uanNcIlxuaW1wb3J0IENvbnRhY3RNZVNlY3Rpb24gZnJvbSBcIi4vQ29udGFjdE1lU2VjdGlvbi9Db250YWN0TWVTZWN0aW9uLmpzXCJcbmltcG9ydCBTa2lsbHNTZWN0aW9uIGZyb20gXCIuL1NraWxsc1NlY3Rpb24vU2tpbGxzU2VjdGlvbi5qc1wiXG5pbXBvcnQgQWJvdXRNZVNlY3Rpb24gZnJvbSBcIi4vQWJvdXRNZVNlY3Rpb24vQWJvdXRNZVNlY3Rpb24uanNcIlxuaW1wb3J0IEhhY2thdGhvblNlY3Rpb24gZnJvbSBcIi4vSGFja2F0aG9uc1NlY3Rpb24vSGFja2F0aG9uU2VjdGlvbi5qc1wiXG5pbXBvcnQgU3RhcnR1cEFjY2VsZXJhdG9yU2VjdGlvbiBmcm9tIFwiLi9TdGFydHVwQWNjZWxlcmF0b3JTZWN0aW9uL1N0YXJ0dXBBY2NlbGVyYXRvclNlY3Rpb24uanNcIlxuXG5jb25zdCBJbmRleCA9ICgpID0+IChcblx0PGRpdj5cblx0XHQ8QnV0dG9uXG5cdFx0XHRjb2xvcj0ncmVkJ1xuXHRcdFx0Y29udGVudD0nTGlrZSdcblx0XHRcdGljb249J2hlYXJ0J1xuXHRcdFx0bGFiZWw9e3sgYmFzaWM6IHRydWUsIGNvbG9yOiAncmVkJywgcG9pbnRpbmc6ICdsZWZ0JywgY29udGVudDogJzIsMDQ4JyB9fVxuXHRcdC8+XG5cdFx0PEhlYWRlclNlY3Rpb24gLz5cblx0XHQ8QWJvdXRNZVNlY3Rpb24gLz5cblx0XHQ8U2tpbGxzU2VjdGlvbiAvPlxuXHRcdDxIYWNrYXRob25TZWN0aW9uIC8+XG5cdFx0PFN0YXJ0dXBBY2NlbGVyYXRvclNlY3Rpb24gLz5cblx0XHQ8Q29udGFjdE1lU2VjdGlvbiAvPlxuXG5cdCAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuXHQgICAgICBcdGJvZHkge1xuXHQgICAgICAgIFx0Y29sb3I6IGJsYWNrO1xuXHQgICAgICAgIFx0Zm9udC1mYW1pbHk6IGNvdXJpZXI7XG5cdCAgICAgIFx0fVxuXHQgICAgYH1cblx0ICAgIDwvc3R5bGU+XG5cdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjIuMTIvc2VtYW50aWMubWluLmNzc1wiPjwvbGluaz5cblx0PC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
	}), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css', 'data-jsx': 3875972279,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 35
		}
	}));
};

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiSGVhZGVyU2VjdGlvbiIsIkNvbnRhY3RNZVNlY3Rpb24iLCJTa2lsbHNTZWN0aW9uIiwiQWJvdXRNZVNlY3Rpb24iLCJIYWNrYXRob25TZWN0aW9uIiwiU3RhcnR1cEFjY2VsZXJhdG9yU2VjdGlvbiIsIkluZGV4IiwiYmFzaWMiLCJjb2xvciIsInBvaW50aW5nIiwiY29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFFVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sUUFBUSxTQUFSLEFBQVEsUUFBQTt3QkFDYixjQUFBO2NBQUE7O2FBQUE7ZUFBQSxBQUNDO0FBREQ7QUFBQSxFQUFBLGtCQUNDLEFBQUM7U0FBRCxBQUNPLEFBQ047V0FGRCxBQUVTLEFBQ1I7UUFIRCxBQUdNLEFBQ0w7U0FBTyxFQUFFLE9BQUYsQUFBUyxNQUFNLE9BQWYsQUFBc0IsT0FBTyxVQUE3QixBQUF1QyxRQUFRLFNBSnZELEFBSVEsQUFBd0Q7O2FBSmhFO2VBREQsQUFDQyxBQU1BO0FBTkE7QUFDQyxxQkFLRCxBQUFDOzthQUFEO2VBUEQsQUFPQyxBQUNBO0FBREE7QUFBQSxxQkFDQSxBQUFDOzthQUFEO2VBUkQsQUFRQyxBQUNBO0FBREE7QUFBQSxxQkFDQSxBQUFDOzthQUFEO2VBVEQsQUFTQyxBQUNBO0FBREE7QUFBQSxxQkFDQSxBQUFDOzthQUFEO2VBVkQsQUFVQyxBQUNBO0FBREE7QUFBQSxxQkFDQSxBQUFDOzthQUFEO2VBWEQsQUFXQyxBQUNBO0FBREE7QUFBQSxxQkFDQSxBQUFDOzthQUFEO2VBWkQsQUFZQztBQUFBO0FBQUE7V0FaRDtPQUFBLEFBcUJDO0FBckJELDZDQXFCTyxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QixvRkFBNUI7O2FBQUE7ZUF0QlksQUFDYixBQXFCQztBQUFBOztBQXRCRixBQTBCQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcm9iZXJ0L0dpdC9uZXh0LWpzLXByb2plY3QifQ==