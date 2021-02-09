# m8blog
My small blog

Small documentation for small blog:

## Properties

To specify ```properties``` of the post write dashes above and below the list in the following format:
```
------------
property_name: property_value
another_property_name: another_value
etc...
------------
```

**NOTE:** make sure you have written enough dashes that the line is longer than the length of both property name and value to make this work.

## Projects

To create a project, simply put a markdown with it's description to the folder called project.

Allowed properties list:

 - **title**: post title
 - **url**: if omitted - the html processed from markdown will be proceeded, otherwise this specified link
 - **inprogress**: value of the field is not important. Only existence of this field marks project as in progress

## Blog posts

To create a blog post, simply put a markdown with it's description to the folder called posts in the following format:
```yyyy-mm-dd-name.md```

Allowed properties list:

 - **title**: post title
 - **url**: if omitted - the html processed from markdown will be proceeded, otherwise this specified link
 - **important**: value of the field is not important. Only existence of this field marks project as important in order to display at the top of the blog
 - **author**: field can be omitted and information will not be displayed, otherwise displayed specified value as author credentials
 - **abstract**: short information of the blog, shown on the main page to encourage or give some info. Required (at least I think so)
