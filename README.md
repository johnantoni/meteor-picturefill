# meteor-picturefill

A responsive image polyfill for <picture>, srcset, sizes, and more. packaged for Meteor

Based on the picturefill js library by Scott Jehl.

http://scottjehl.github.io/picturefill/

### Install

    meteor add johnantoni:meteor-picturefill

### Usage

Examples http://scottjehl.github.io/picturefill/#examples

### Markup

#### As HTML

    <picture>
      <!--[if IE 9]><video style="display: none;"><![endif]-->
      <source srcset="examples/images/extralarge.jpg" media="(min-width: 1000px)">
      <source srcset="examples/images/large.jpg" media="(min-width: 800px)">
      <!--[if IE 9]></video><![endif]-->
      <img srcset="examples/images/medium.jpg" alt="A giant stone face at The Bayon temple in Angkor Thom, Cambodia">
    </picture>

#### As JADE

    picture
      | <!--[if IE 9]><video style="display: none;"><![endif]-->
      source(srcset="examples/images/extralarge.jpg" media="(min-width: 1000px)")
      source(srcset="examples/images/large.jpg" media="(min-width: 800px)")
      | <!--[if IE 9]></video><![endif]-->
      img(srcset="examples/images/medium.jpg" alt="A giant stone face at The Bayon temple in Angkor Thom, Cambodia")
