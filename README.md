# Next.js 15 Layout Error

This repository demonstrates a common error encountered when migrating from Next.js 13 to Next.js 15 involving the use of layouts.  The error, "Invariant Violation: `layout` elements must be the top-level child of a page", arises when layouts are not correctly structured within the page component.

## Bug Description

A simple Next.js application that worked perfectly in Next.js 13 fails in Next.js 15 with the error message above. This is because Next.js 15 has stricter rules about layout placement within pages. 

## Solution

The solution involves restructuring the page component to ensure the layout is indeed the top-level child. Any other elements should be nested within the layout component.  This change aligns the code with the stricter layout requirements introduced in Next.js 15.