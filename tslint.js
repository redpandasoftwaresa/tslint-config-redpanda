const path = require('path');

module.exports = {
	rulesDirectory: [
		path.join(path.dirname(require.resolve('tslint-consistent-codestyle')), './'),
		path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
		path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), './'),
	],
	rules: {
		'prefer-const': true,
		'no-var-keyword': true,
		'object-literal-shorthand': true,
		'object-shorthand-properties-first': true,
		'object-literal-key-quotes': [true, 'as-needed'],
		'prefer-array-literal': true,
		quotemark: [
			true,
			'single',
			'avoid-escape',
			'avoid-template',
			'jsx-double',
		],
		'prefer-template': true,
		'no-eval': true,
		'no-function-constructor-with-string-args': true,
		'space-before-function-paren': [
			true,
			{
				anonymous: 'always',
				named: 'never',
			},
		],
		'no-parameter-reassignment': true,
		align: [
			true,
			'arguments',
			'parameters',
		],
		'prefer-arrow-callback': [true],
		'arrow-parens': false,
		'ter-arrow-parens': [
			true,
			'as-needed',
			{ 'requireForBlockBody': true },
		],
		'no-duplicate-imports': true,
		'one-variable-per-declaration': [true, 'ignore-for-loop'],
		'no-increment-decrement': true,
		'triple-equals': [true, 'allow-null-check'],
		'no-boolean-literal-compare': true,
		curly: [true, 'ignore-same-line'],
		'brace-style': [
			true,
			'1tbs',
			{ allowSingleLine: true },
		],
		'no-else-after-return': true,
		'comment-format': [true, 'check-space'],
		'indent': [true, 'spaces', 4],
		whitespace: [
			true,
			'check-branch', 
			'check-decl', 
			'check-operator', 
			'check-preblock', 
			'check-separator', 
		],
		eofline: false, 
		'space-in-parens': [true, 'never'], 
		'array-bracket-spacing': [true, 'never'], 
		'object-curly-spacing': [true, 'always'], 
		'max-line-length': [true, 150], 
		'block-spacing': true, 
		'ter-computed-property-spacing': true, 
		'ter-func-call-spacing': true, 
		'no-trailing-whitespace': true, 
		'no-consecutive-blank-lines': true, 
		'trailing-comma': [
			true,
			{
				multiline: 'always',
				singleline: 'never',
				esSpecCompliant: true,
			},
		], 
		semicolon: [true, 'always'], 
		'no-construct': true, 
		radix: true, 
		'function-name': [
			true,
			{
				'function-regex': /^[a-z$][\w\d]+$/,
				'method-regex': /^[a-z$][\w\d]+$/,
				'private-method-regex': /^[a-z$][\w\d]+$/,
				'protected-method-regex': /^[a-z$][\w\d]+$/,
				'static-method-regex': /^[a-z$][\w\d]+$/,
			}, 
		],
		'variable-name': [true, 'check-format', 'allow-pascal-case'], 
		'class-name': true, 
		'no-this-assignment': [true, 'allow-destructuring'], 
		'import-name': false, 
	},
};