/**
 * Module Dependencies
 */

var fs = require('fs');
var tlds = require('tlds'); // List of all Top Level Domains (TLDs)
var XRegExp = require('xregexp').XRegExp;

// Sort the TLDs by length, decreasing, since the RegExp matching is eager
var sortedTLDs = tlds.sort(function(a, b) { return b.length - a.length });

// Read template file and cleanup
var template = fs.readFileSync(__dirname + '/loose-url.regexp', 'utf-8').replace(/\s|\n/g, '');

// All alphabetic characters in all languages covered by unicode
var alphabetic = new XRegExp('\\p{Alphabetic}');

// Replace the TLD and Alphabetic placeholders in the template
var source = template
                .replace(/\(tlds\)/g, sortedTLDs.join('|'))
                .replace(/\(alphabetic\)/g, alphabetic.source);

var generated = new RegExp(source, 'gi');

fs.writeFileSync(__dirname + '/index.js', 'module.exports = ' + generated + ';');
