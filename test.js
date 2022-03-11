import test from 'ava';
import aynen from './index.js';

test('main', t => {
	t.is(aynen('', ''), true);
	t.is(aynen('fooBar', 'fooBar'), true);
	t.is(aynen('fooBar', 'foo-bar'), true);
	t.is(aynen('foo-bar', 'foo_bar'), true);
	t.is(aynen('foo-bar', 'foo bar'), true);
	t.is(aynen('foo', '_foo-'), true);
});

test('main wrong', t => {
	t.is(aynen('fooBar', 'barFoo'), false);
	t.is(aynen('foo', '_foo-Bar'), false);
});

test('with option', t => {
	t.deepEqual(
		aynen('fooBar', 'foo-bar', {
			rating: true
		}), 
		{ 
		  isSame: true, 
		  similarityRating: 1 
		}
	);
});

test('with wrong option', t => {
	t.deepEqual(
		aynen('foo-bar', 'bar_FOO', {
			rating: true
		}), 
		{ 
		  isSame: false, 
		  similarityRating: 0.8 
		}
	);
});