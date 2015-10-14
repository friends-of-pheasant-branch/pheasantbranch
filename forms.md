Forms
=====

This is just a basic sttructure to follow when creating forms.
Most contents can be changed or added to in any way needed.
Class names can be added to but the existing ones should stay included.
The ID's in the html here are only examples, they can be changed to whatever you
need.

The important things here are the div order & hiarchy.

Also the **submit buttons** should be written as `<button>` as shown.
The images needed for design do not work well when **submit buttons** are
created as an `<input>`.

Default Forms (vertical)
------------------------

Individual form controls automatically receive some global styling.

All textual `<input>`, `<textarea>`, and `<select>` elements with
`.form-control` are set to `width: 100%;` by default.

Wrap labels and controls in `.form-group` for optimum spacing.

```
<form>
  <div class="form-group tds-form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
  </div>
  <div class="form-group tds-form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group tds-form-group">
    <label for="exampleInputFile">File input</label>
    <input type="file" id="exampleInputFile">
    <p class="help-block">Example block-level help text here.</p>
  </div>
  <button type="submit" class="gallery-btn">Submit</button>
</form>
```

Inline Forms (horizontal)
-------------------------

Add `.form-inline` to your form for left-aligned and inline-block controls.

```
<form class="form-inline">
  <div class="form-group tds-form-group">
    <label for="exampleInputName2">Name</label>
    <input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  </div>
  <div class="form-group tds-form-group">
    <label for="exampleInputEmail2">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com">
  </div>
  <button type="submit" class="gallery-btn">Send invitation</button>
</form>
```

Disabled Form
-------------

Just for reference if we ever need to make a form seem disabled to the user.
Add the `disabled` boolean attribute on an input to prevent user interactions.
Disabled inputs appear lighter and add a not-allowed cursor automatically.

```
<input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here" disabled>
```
