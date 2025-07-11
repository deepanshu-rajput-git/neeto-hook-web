TITLE: ActionDropdown Component API Reference
DESCRIPTION: Comprehensive API documentation for the ActionDropdown component, detailing its structure, subcomponents, and their respective roles within the UI framework. This component combines a dropdown menu with a button for action selection.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/ActionDropdownStoriesDocs/ActionDropdownDocs.mdx#_snippet_2

LANGUAGE: APIDOC
CODE:
```
ActionDropdown:
  Description: Combines a dropdown menu with a button, allowing users to select an option from the dropdown and perform the corresponding action using the button.

  Subcomponents:
    ActionDropdown.Menu:
      Description: Defines the container for organizing and displaying a list of clickable items.

    ActionDropdown.MenuItem:
      Description: Represents an individual item or option in the dropdown menu.
      Subcomponent:
        ActionDropdown.MenuItem.Button:
          Description: Provides a button-like element within a menu item.

    ActionDropdown.Divider:
      Description: Creates a visual separation or divider between groups of menu items.
```

----------------------------------------

TITLE: NeetoUI Dropdown Component and Subcomponents API Reference
DESCRIPTION: Comprehensive API documentation for the NeetoUI `Dropdown` component, outlining its primary function and detailing the purpose and usage of its key subcomponents: `Dropdown.Menu`, `Dropdown.MenuItem`, `Dropdown.MenuItem.Button`, and `Dropdown.Divider`. This section clarifies the role of each part of the component.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/DropdownStoriesDocs/DropdownDocs.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
Dropdown:
  - Presents a list of options in a menu that can be expanded when clicked, allowing users to select one option from the list.

Dropdown.Menu:
  - Defines the container for organizing and displaying a list of clickable items.

Dropdown.MenuItem:
  - Represents an individual item or option in the dropdown menu.

Dropdown.MenuItem.Button:
  - Provides a button-like element within a menu item.

Dropdown.Divider:
  - Creates a visual separation or divider between groups of menu items.
```

----------------------------------------

TITLE: NeetoUI Accordion Component API Reference
DESCRIPTION: Details the structure and subcomponents of the NeetoUI Accordion component, which allows users to expand or collapse content sections.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/AccordionStoriesDocs/AccordionDocs.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
Accordion:
  Description: Allows users to expand or collapse sections of content organized in a vertical stack to reveal or hide additional information.
  Subcomponents:
    Accordion.Item:
      Description: Represents an individual section within an accordion that can be expanded or collapsed.
```

----------------------------------------

TITLE: Using NeetoUI Components Directly
DESCRIPTION: Demonstrates the direct usage of NeetoUI components, such as `Button`, which are pre-scoped and available for immediate use within the editor.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Introduction/LivePlaygroundDocs/LivePlaygroundUsage.mdx#_snippet_0

LANGUAGE: JSX
CODE:
```
<Button label="hello world" />
```

----------------------------------------

TITLE: Using React Hooks in Scope
DESCRIPTION: Illustrates how to call standard React hooks, such as `useState`, by prefixing them with `React.` when the React library is globally available in the editor's scope.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Introduction/LivePlaygroundDocs/LivePlaygroundUsage.mdx#_snippet_2

LANGUAGE: JSX
CODE:
```
React.useState
```

----------------------------------------

TITLE: Start neetoUI Storybook Application
DESCRIPTION: This command launches the Storybook application for neetoUI. Developers can use Storybook to test components in isolation, visualize their behavior, and verify changes during development.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/README.md#_snippet_11

LANGUAGE: bash
CODE:
```
yarn storybook
```

----------------------------------------

TITLE: Example Customization of neeto-ui Input Component
DESCRIPTION: Demonstrates how to override default CSS variables for the neeto-ui `Input` component within a custom class. This example changes the border radius and the focus-within border color and box shadow, illustrating a practical application of the provided customization variables.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/InputStoriesDocs/InputCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-input {
  --neeto-ui-input-border-radius: var(--neeto-ui-rounded-none);
  --neeto-ui-input-focus-within-border-color: rgb(var(--neeto-ui-success-500));
  --neeto-ui-input-focus-within-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-success-500), 15%);
}
```

----------------------------------------

TITLE: Storybook Docs Page Configuration
DESCRIPTION: Configures the Storybook documentation page, setting its title to 'Welcome' and hiding the canvas preview tab to focus on documentation content.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Introduction/Welcome.stories.mdx#_snippet_0

LANGUAGE: jsx
CODE:
```
import { Meta } from "@storybook/addon-docs";

<Meta
  title="Welcome"
  parameters={
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  }
/>
```

----------------------------------------

TITLE: Configure Storybook Docs for neeto-ui Box Shadows
DESCRIPTION: This Storybook `Meta` component configures the documentation page for neeto-ui box shadows. It sets the page title to 'Foundation/Helpers/Box Shadows' and ensures the 'docs' view mode is active. The `previewTabs` parameter hides the canvas tab, focusing solely on the documentation content.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersBoxShadows.stories.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
<Meta
  title="Foundation/Helpers/Box Shadows"
  parameters={{
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true }
    }
  }}
/>
```

----------------------------------------

TITLE: neeto-ui Table onChange Event and URL Query Parameters
DESCRIPTION: This API documentation details the `onChange` event handler for the neeto-ui Table component, specifying its parameters and how it maps table state (pagination, sorting) to URL query parameters. It outlines the keys used for `sort_by`, `order_by`, `page`, and `page_size` when this functionality is enabled by default.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TableStoriesDocs/TableSortingDocs.mdx#_snippet_2

LANGUAGE: APIDOC
CODE:
```
onChange(pagination, filters, sorter)
  - Description: Callback function triggered when table state (pagination, filters, or sorter) changes.
  - Parameters:
    - pagination: Object containing current pagination state (e.g., current page, page size).
    - filters: Object containing current filter state.
    - sorter: Object containing current sorting state (e.g., column, order).

URL Query Parameters (used by default if handlePageChange is not provided):
  - sort_by:
    - Description: The `dataIndex` of the particular column in `snake_case`.
    - Type: string
  - order_by:
    - Description: The sort order.
    - Type: string
    - Values: "ascend", "descend", "undefined"
  - page:
    - Description: The current page number.
    - Type: number
  - page_size:
    - Description: The page size specified by the product.
    - Type: number
```

----------------------------------------

TITLE: Example: Customizing neeto-ui Popover Padding
DESCRIPTION: This example demonstrates how to override the default padding of the neeto-ui Popover component using its exposed CSS variables. By targeting the `.neetix-popover` class, developers can easily adjust the component's internal spacing.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Overlays/PopoverStoriesDocs/PopoverCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-popover {
  --neeto-ui-popover-padding-x: 1.5rem;
  --neeto-ui-popover-padding-y: 1.5rem;
}
```

----------------------------------------

TITLE: Render neeto-ui Box Shadow Examples with React
DESCRIPTION: This React component dynamically generates an HTML table to showcase various neeto-ui box shadow styles. It iterates through the `boxShadows` array, displaying a visual preview, the corresponding CSS variable name, and the utility class name for each shadow. This provides a clear, interactive demonstration of the defined shadows.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersBoxShadows.stories.mdx#_snippet_3

LANGUAGE: jsx
CODE:
```
<table className="story-demo-table">
  <thead>
    <tr>
      <td>Preview</td>
      <td>CSS Variable</td>
      <td>Class</td>
    </tr>
  </thead>
  <tbody>
    {boxShadows.map((shadow) => {
      return (
        <tr key={shadow.name}>
          <td>
            <div className="p-6">
              <div
                className={`w-20 h-20 border bg-white ${shadow.name.replace(
                  "$neeto-ui",
                  "neeto-ui"
                )}`}
              ></div>
            </div>
          </td>
          <td>
            <code>{`${shadow.name.replace("$neeto-ui", "--neeto-ui")}`}</code>
          </td>
          <td>
            <div className="flex justify-between">
              <code>{`${shadow.name.replace("$neeto-ui", "neeto-ui")}`}</code>
            </div>
          </td>
        </tr>
      );
    })}
  </tbody>
</table>
```

----------------------------------------

TITLE: Example: Customizing neeto-ui Callout for Success State
DESCRIPTION: Demonstrates how to override specific CSS variables to customize the `neeto-ui` Callout component for a success state. This example modifies the background color, border color, and icon color to reflect a success theme.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/CalloutStoriesDocs/CalloutCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-callout--success {
  --neeto-ui-callout-bg-color: rgb(var(--neeto-ui-primary-100));
  --neeto-ui-callout-border-color: rgb(var(--neeto-ui-primary-500));
  --neeto-ui-callout-icon-color: rgb(var(--neeto-ui-primary-500));
}
```

----------------------------------------

TITLE: Accessing Formik Components via Namespace
DESCRIPTION: Explains how to integrate Formik components by accessing them through the `FormikComponents` namespace, as shown with `FormikComponents.Form` and `FormikComponents.Button`.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Introduction/LivePlaygroundDocs/LivePlaygroundUsage.mdx#_snippet_1

LANGUAGE: JSX
CODE:
```
<FormikComponents.Form>
  <FormikComponents.Button label="hello world" />
</FormikComponents.Form>
```

----------------------------------------

TITLE: Example of Customizing neeto-ui Tooltip CSS Variables
DESCRIPTION: This example demonstrates how to override the default CSS variables for the neeto-ui Tooltip component within a custom CSS class, specifically changing the background color, arrow color, and light theme text color to a primary blue.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Overlays/TooltipStoriesDocs/TooltipCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-tooltip {
  --neeto-ui-tooltip-bg-color: rgb(var(--neeto-ui-primary-800));
  --neeto-ui-tooltip-arrow-color: rgb(var(--neeto-ui-primary-800));
  --neeto-ui-tooltip-light-theme-color: rgb(var(--neeto-ui-primary-800));
}
```

----------------------------------------

TITLE: Example of Customizing neeto-ui Textarea Component with CSS Variables
DESCRIPTION: This example demonstrates how to override specific CSS variables for the `Textarea` component. It shows how to change the border-radius, focus-within border color, and box-shadow to achieve a custom look, illustrating the flexibility offered by neeto-ui's CSS variable-based customization.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TextareaStoriesDocs/TextareaCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-textarea {
  --neeto-ui-input-border-radius: var(--neeto-ui-rounded-none);
  --neeto-ui-input-focus-within-border-color: rgb(var(--neeto-ui-success-500));
  --neeto-ui-input-focus-within-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-success-500), 15%);
}
```

----------------------------------------

TITLE: Using neetoUI Formik Form with Function as Children
DESCRIPTION: This example shows how to wrap a form with neetoUI's `Form` component, passing `formikProps` for initial values, submission logic, and validation schema using Yup. The `children` prop is a function that receives Formik props, allowing dynamic rendering of form fields.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/README.md#_snippet_7

LANGUAGE: jsx
CODE:
```
import * as Yup from "yup";
import { Form } from "@bigbinary/neetoui/formik";

<Form
  formikProps={{
    initialValues: {
      name: "",
      email: ""
    },
    onSubmit: (values, formikBag) => {
      console.log(values, formikBag);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required")
    })
  }}
  className="w-full space-y-6"
>
  {props => {
    return (
      <>
        <Input {...props} label="Name" name="name" />
        <Input {...props} label="Email" name="email" />
        <Button label="Submit" type="submit" style="primary" />
      </>
    );
  }}
</Form>;
```

----------------------------------------

TITLE: Example: Customizing neeto-ui TreeSelect Component Styles
DESCRIPTION: This example demonstrates how to override specific CSS variables for the neeto-ui TreeSelect component. It shows how to change the border-radius and the focus-within border color and box-shadow, providing a practical application of the customization options using a custom CSS class.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TreeSelectStoriesDocs/TreeSelectCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-tree-select {
  --neeto-ui-tree-select-border-radius: var(--neeto-ui-rounded-none);
  --neeto-ui-tree-select-focus-within-border-color: rgb(
    var(--neeto-ui-success-500)
  );
  --neeto-ui-tree-select-focus-within-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-success-500), 15%);
}
```

----------------------------------------

TITLE: Example of Customizing neeto-ui DateInput CSS Variables
DESCRIPTION: This example demonstrates how to override specific CSS variables for the `DateInput` component within a custom CSS class. It shows how to change the border-radius and the active bar background color, illustrating the process of applying custom styles using the provided CSS variables.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/DateInputStoriesDocs/DateInputCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-datepicker {
  --neeto-ui-date-input-border-radius: var(--neeto-ui-rounded-none);
  --neeto-ui-date-input-active-bar-bg-color: rgb(var(--neeto-ui-success-500));
}
```

----------------------------------------

TITLE: Example: Customizing neeto-ui DateInput with CSS Variables
DESCRIPTION: This example demonstrates how to apply custom styling to the neeto-ui `DateInput` component by overriding specific CSS variables within a custom class. It shows how to modify the border-radius, focus box-shadow, and focus border-color to achieve a distinct visual appearance.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TimePickerStoriesDocs/TimePickerCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-timepicker {
  --neeto-ui-time-input-border-radius: var(--neeto-ui-rounded-none);
  --neeto-ui-time-input-focus-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-success-500), 15%);
  --neeto-ui-time-input-focus-border-color: rgb(var(--neeto-ui-success-500));
}
```

----------------------------------------

TITLE: Storybook Table Styling for Font Size Examples
DESCRIPTION: This CSS snippet overrides the default background of table rows within Storybook's documentation view. It ensures that the font size examples, which are displayed in a table, have a transparent background, preventing visual conflicts with the example previews.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersFontSize.stories.mdx#_snippet_0

LANGUAGE: css
CODE:
```

  .story-demo-table tr{
      background: transparent !important;
  }


```

----------------------------------------

TITLE: Example: Overriding neeto-ui ActionDropdown CSS Variable
DESCRIPTION: Illustrates how to apply a custom value to a neeto-ui CSS variable within a specific selector. This example demonstrates setting a custom border-radius for the `ActionDropdown` component using the `.neetix-actiondropdown` class.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/ActionDropdownStoriesDocs/ActionDropdownCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-actiondropdown {
  --neeto-ui-action-dropdown-border-radius: 1px;
}
```

----------------------------------------

TITLE: Install and run neetoUI v4 codemod globally
DESCRIPTION: Installs the `@bigbinary/neetoui-codemod-v4` CLI tool globally using Yarn, then executes it to automatically migrate source code in the `src` directory to be compatible with neetoUI v4. This method is an alternative to running the codemod via `npx`.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Migration-Guide/v3tov4.stories.mdx#_snippet_4

LANGUAGE: shell
CODE:
```
yarn global add @bigbinary/neetoui-codemod-v4
```

LANGUAGE: shell
CODE:
```
neetoui-codemod-v4 src
```

----------------------------------------

TITLE: Example: Customizing neeto-ui ColorPicker Border Radius
DESCRIPTION: This example demonstrates how to override specific CSS variables for the neeto-ui ColorPicker component. It shows how to change the border-radius of the palette items and the target color block to create a fully rounded appearance, showcasing the flexibility of CSS variable customization.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/ColorPickerStoriesDocs/ColorPickerCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-colorpicker {
  --neeto-ui-colorpicker-palette-item-border-radius: var(
    --neeto-ui-rounded-full
  );
  --neeto-ui-colorpicker-target-color-block-border-radius: var(
    --neeto-ui-rounded-full
  );
}
```

----------------------------------------

TITLE: Example: Overriding neeto-ui Checkbox CSS Variables
DESCRIPTION: Illustrates how to apply custom styles to the neeto-ui `Checkbox` component by overriding its default CSS variables within a specific class. This example demonstrates changing the checkbox color, focus-visible outline, and checked border color.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/CheckboxStoriesDocs/CheckboxCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-checkbox {
  --neeto-ui-checkbox-color: rgb(var(--neeto-ui-gray-800));
  --neeto-ui-checkbox-focus-visible-outline: 3px solid rgba(var(--neeto-ui-gray-800), 50%);
  --neeto-ui-checkbox-checked-border-color: rgb(var(--neeto-ui-gray-800));
}
```

----------------------------------------

TITLE: Example Customization of neeto-ui NoData Component
DESCRIPTION: This example demonstrates how to override the default CSS variables for the `NoData` component within a custom CSS class. It shows how to adjust the image's bottom margin and maximum width, as well as the action block's top margin, to achieve a custom look.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/NoDataStoriesDocs/NoDataCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-nodata {
  --neeto-ui-no-data-image-margin-bottom: 2rem;
  --neeto-ui-no-data-image-max-width: 20rem;
  --neeto-ui-no-data-action-block-margin-top: 2rem;
}
```

----------------------------------------

TITLE: Example Customization of neeto-ui Tab Active State
DESCRIPTION: Demonstrates how to override specific CSS variables for the `Tab` component's active state. This example changes the active tab's text color and border color to a primary theme color, showcasing how to apply custom styling using the provided CSS variables.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TabStoriesDocs/TabCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-tab {
  --neeto-ui-tab-active-color: rgb(var(--neeto-ui-primary-500));
  --neeto-ui-tab-active-border-color: rgb(var(--neeto-ui-primary-500));
}
```

----------------------------------------

TITLE: Example Customization of neeto-ui Accordion CSS Variables
DESCRIPTION: This example demonstrates how to override specific CSS variables for the neeto-ui Accordion component within a custom CSS class. It shows how to adjust horizontal padding for items and drops, and change the text color for default, hover, and open states using primary color variables.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/AccordionStoriesDocs/AccordionCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-accordion {
  --neeto-ui-accordion-item-padding-x: 0px;
  --neeto-ui-accordion-drop-padding-x: 0px;
  --neeto-ui-accordion-item-color: rgb(var(--neeto-ui-primary-500));
  --neeto-ui-accordion-item-hover-color: rgb(var(--neeto-ui-primary-600));
  --neeto-ui-accordion-item-open-color: rgb(var(--neeto-ui-primary-800));
}
```

----------------------------------------

TITLE: Example: Customizing neeto-ui Radio Component Colors
DESCRIPTION: An example demonstrating how to override specific CSS variables for the neeto-ui Radio component within a custom class. This snippet shows how to change the radio button's color, focus outline, and checked state border color.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/RadioStoriesDocs/RadioCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-radio {
  --neeto-ui-radio-color: rgb(var(--neeto-ui-gray-800));
  --neeto-ui-radio-focus-visible-outline: 3px solid rgba(var(--neeto-ui-gray-800), 50%);
  --neeto-ui-radio-checked-border-color: rgb(var(--neeto-ui-gray-800));
}
```

----------------------------------------

TITLE: Import neetoUI base stylesheet
DESCRIPTION: Starting from version 3.0.x, neetoUI's stylesheet has been separated from the main bundle. This SCSS import statement should be added to your main SCSS entry point to apply the library's default styles and ensure proper component rendering.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/README.md#_snippet_1

LANGUAGE: SCSS
CODE:
```
@import "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Example: Customizing Primary Button Style with CSS Variables
DESCRIPTION: This example demonstrates how to override the default CSS variables to create a custom primary button style. It specifically targets the `.neetix-button--primary` class to modify its text color, background color, hover states, and focus box-shadow, showcasing the flexibility of CSS variable-based customization.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/ButtonStoriesDocs/ButtonCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-button--primary {
  --neeto-ui-btn-color: rgb(var(--neeto-ui-white));
  --neeto-ui-btn-bg-color: rgb(var(--neeto-ui-gray-800));
  --neeto-ui-btn-hover-color: rgb(var(--neeto-ui-white));
  --neeto-ui-btn-hover-bg-color: rgb(var(--neeto-ui-black));
  --neeto-ui-btn-focus-color: rgb(var(--neeto-ui-white));
  --neeto-ui-btn-focus-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-gray-500), 15%);
  --neeto-ui-btn-focus-visible-color: rgb(var(--neeto-ui-white));
}
```

----------------------------------------

TITLE: Upgrade neetoUI package to v4
DESCRIPTION: Updates the `@bigbinary/neetoui` package to version `4.0.13` using Yarn, initiating the migration process to neetoUI v4.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Migration-Guide/v3tov4.stories.mdx#_snippet_0

LANGUAGE: shell
CODE:
```
yarn upgrade @bigbinary/neetoui@4.0.13
```

----------------------------------------

TITLE: Importing the Stepper Component
DESCRIPTION: This code snippet demonstrates the standard way to import the `Stepper` component from the `@bigbinary/neetoui` package. The `Stepper` component is crucial for building user interfaces that require guiding users through a sequence of steps, such as onboarding flows or multi-page forms, by visually representing their progress.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/StepperStoriesDocs/StepperDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Stepper } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Example of Customizing neeto-ui Select Component with CSS Variables
DESCRIPTION: This example demonstrates how to override the default CSS variables for the `Select` component within a custom class, `.neetix-select`. It shows how to change the border radius for both the select input and its menu, and how to modify the focus state's box shadow and border color to use a success-themed color.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/SelectStoriesDocs/SelectCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-select {
  --neeto-ui-select-border-radius: var(--neeto-ui-rounded-none);
  --neeto-ui-select-focus-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-success-500), 15%);
  --neeto-ui-select-focus-border-color: rgb(var(--neeto-ui-success-500));
  --neeto-ui-select-menu-border-radius: var(--neeto-ui-rounded-none);
}
```

----------------------------------------

TITLE: Example Customizing neeto-ui Table CSS Variables
DESCRIPTION: This example demonstrates how to override the default CSS variables for the neeto-ui Table component within a custom CSS class. By targeting the `.neetix-table` class, specific variables like header font size and text transformation can be adjusted to achieve desired visual changes.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TableStoriesDocs/TableCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-table {
  --neeto-ui-table-header-font-size: var(--neeto-ui-text-sm);
  --neeto-ui-table-header-text-transform: capitalize;
}
```

----------------------------------------

TITLE: JavaScript Definition of Neeto-UI Font Size Helpers
DESCRIPTION: This JavaScript array, `fontSizeHelpers`, defines the mapping between semantic font size names (e.g., 'h1', 'body1') and their corresponding neeto-ui CSS variable names and compiled values. It serves as the data source for dynamically generating font size examples and documentation.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersFontSize.stories.mdx#_snippet_1

LANGUAGE: javascript
CODE:
```
export const fontSizeHelpers = [
  {
    name: "$neeto-ui-text-3xl",
    value: "h1",
    compiledValue: "h1",
  },
  {
    name: "$neeto-ui-text-2xl",
    value: "h2",
    compiledValue: "h2",
  },
  {
    name: "$neeto-ui-text-xl",
    value: "h3",
    compiledValue: "h3",
  },
  {
    name: "$neeto-ui-text-base",
    value: "h4",
    compiledValue: "h4",
  },
  {
    name: "$neeto-ui-text-sm",
    value: "h5",
    compiledValue: "h5",
  },
  {
    name: "$neeto-ui-text-xs",
    value: "h6",
    compiledValue: "h6",
  },
  {
    name: "$neeto-ui-text-base",
    value: "body1",
    compiledValue: "body1",
  },
  {
    name: "$neeto-ui-text-sm",
    value: "body2",
    compiledValue: "body2",
  },
  {
    name: "$neeto-ui-text-xs",
    value: "body3",
    compiledValue: "body3",
  },
  {
    name: "$neeto-ui-text-xxs",
    value: "nano",
    compiledValue: "nano",
  },
  {
    name: "$neeto-ui-text-xxs",
    value: "xxs",
    compiledValue: "xxs",
  },
  {
    name: "$neeto-ui-text-xs",
    value: "xs",
    compiledValue: "xs",
  },
  {
    name: "$neeto-ui-text-sm",
    value: "sm",
    compiledValue: "sm",
  },
  {
    name: "$neeto-ui-text-base",
    value: "base",
    compiledValue: "base",
  },
  {
    name: "$neeto-ui-text-lg",
    value: "lg",
    compiledValue: "lg",
  },
  {
    name: "$neeto-ui-text-xl",
    value: "xl",
    compiledValue: "xl",
  },
  {
    name: "$neeto-ui-text-2xl",
    value: "2xl",
    compiledValue: "2xl",
  },
  {
    name: "$neeto-ui-text-3xl",
    value: "3xl",
    compiledValue: "3xl",
  },
  {
    name: "$neeto-ui-text-4xl",
    value: "4xl",
    compiledValue: "4xl",
}
];
```

----------------------------------------

TITLE: Example of Customizing neeto-ui Modal Component CSS Variables
DESCRIPTION: Demonstrates how to override the default CSS variables for the neeto-ui modal component within a custom CSS class (`.neetix-alert`). This example adjusts various padding values for the close button, header, body, and footer, and modifies the wrapper's border-radius to achieve a custom visual style.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Overlays/AlertStoriesDocs/AlertCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-alert {
  --neeto-ui-modal-close-btn-top: 32px;
  --neeto-ui-modal-close-btn-right: 32px;
  --neeto-ui-modal-header-padding-top: 32px;
  --neeto-ui-modal-header-padding-left: 32px;
  --neeto-ui-modal-body-padding-bottom: 32px;
  --neeto-ui-modal-body-padding-x: 32px;
  --neeto-ui-modal-footer-padding-bottom: 32px;
  --neeto-ui-modal-footer-padding-x: 32px;
  --neeto-ui-modal-wrapper-border-radius: var(--neeto-ui-rounded-none);
}
```

----------------------------------------

TITLE: Run neetoUI v4 codemod via npx
DESCRIPTION: Executes the `@bigbinary/neetoui-codemod-v4` CLI tool directly using `npx` to automatically migrate source code in the `src` directory to be compatible with neetoUI v4. This step should be performed after committing package changes.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Migration-Guide/v3tov4.stories.mdx#_snippet_3

LANGUAGE: shell
CODE:
```
npx @bigbinary/neetoui-codemod-v4 src
```

----------------------------------------

TITLE: Example: Customizing neeto-ui Modal with CSS Variables
DESCRIPTION: This example demonstrates how to apply custom styles to the neeto-ui Modal component by overriding its default CSS variables within a custom CSS class. It specifically shows adjustments to the close button's position, header, body, and footer padding, and the modal wrapper's border-radius.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Overlays/ModalStoriesDocs/ModalCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-modal {
  --neeto-ui-modal-close-btn-top: 32px;
  --neeto-ui-modal-close-btn-right: 32px;
  --neeto-ui-modal-header-padding-top: 32px;
  --neeto-ui-modal-header-padding-left: 32px;
  --neeto-ui-modal-body-padding-bottom: 32px;
  --neeto-ui-modal-body-padding-x: 32px;
  --neeto-ui-modal-footer-padding-bottom: 32px;
  --neeto-ui-modal-footer-padding-x: 32px;
  --neeto-ui-modal-wrapper-border-radius: var(--neeto-ui-rounded-none);
}
```

----------------------------------------

TITLE: Example: Overriding Stepper Component CSS Variables
DESCRIPTION: This example demonstrates how to apply custom styling to the neeto-ui Stepper component by overriding its default CSS variables. It specifically shows how to change the background color of the default and active stages, and the border color of the done separator, using a custom CSS class.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/StepperStoriesDocs/StepperCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-stepper {
  --neeto-ui-stepper-stage-bg-color: rgb(var(--neeto-ui-success-100));
  --neeto-ui-stepper-item-active-stage-bg-color: rgb(
    var(--neeto-ui-success-800)
  );
  --neeto-ui-stepper-item-done-separator-border-color: rgb(
    var(--neeto-ui-success-800)
  );
}
```

----------------------------------------

TITLE: Configure Storybook Meta for Line Height Documentation
DESCRIPTION: Sets up Storybook documentation parameters for the 'Line height' page, specifying the view mode as 'docs' and hiding the canvas preview tab for a cleaner presentation.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersLineHeight.stories.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
<Meta
  title="Foundation/Helpers/Line height"
  parameters={{
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true }
    }
  }}
/>
```

----------------------------------------

TITLE: Importing neetoUI Formik Components
DESCRIPTION: This snippet demonstrates how to import individual components like `Input` from the `@bigbinary/neetoui/formik` package using named exports. This is the standard way to access neetoUI's Formik-integrated UI elements.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/README.md#_snippet_6

LANGUAGE: jsx
CODE:
```
import { Input } from "@bigbinary/neetoui/formik";
```

----------------------------------------

TITLE: Example: Customizing neeto-ui Tree Checkbox Colors
DESCRIPTION: This example demonstrates how to override the default CSS variables for the `neeto-ui` Tree component's checkboxes. By targeting the `.neetix-tree` class, it changes the checkbox color, checked border color, and checked background color to a success-themed palette, showcasing how to apply custom styling using the provided CSS variables.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TreeStoriesDocs/TreeCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-tree {
  --neeto-ui-tree-checkbox-color: rgb(var(--neeto-ui-success-500));
  --neeto-ui-tree-checkbox-checked-border-color: rgb(
    var(--neeto-ui-success-500)
  );
  --neeto-ui-tree-checkbox-checked-bg-color: rgb(var(--neeto-ui-success-500));
}
```

----------------------------------------

TITLE: Importing Slider Component in NeetoUI
DESCRIPTION: This snippet demonstrates the standard way to import the `Slider` component from the `@bigbinary/neetoui` library in a JavaScript or TypeScript project. The `Slider` component is built upon Ant Design's Slider, allowing for further customization based on Ant Design's API documentation.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/SliderStoriesDocs/SliderDocs.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
import { Slider } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Example: Overriding neeto-ui Dropdown CSS Variables
DESCRIPTION: This CSS snippet demonstrates how to override the default values of neeto-ui Dropdown component's CSS variables within a custom class. It specifically shows how to change the border-radius to a non-rounded style and modify the background color of an active dropdown item, providing a practical example of component customization.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/DropdownStoriesDocs/DropdownCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-dropdown {
  --neeto-ui-dropdown-border-radius: var(--neeto-ui-rounded-none);
  --neeto-ui-dropdown-item-active-bg-color: rgb(var(--neeto-ui-gray-800));
}
```

----------------------------------------

TITLE: Install Ant Design as a separate dependency
DESCRIPTION: Adds `antd` version `4.24.3` as a direct project dependency. This is necessary because `antd` is no longer bundled with neetoUI v4 and must be installed separately.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Migration-Guide/v3tov4.stories.mdx#_snippet_2

LANGUAGE: shell
CODE:
```
yarn add antd@4.24.3
```

----------------------------------------

TITLE: Commit package upgrade changes
DESCRIPTION: Commits the modifications to `package.json` and `yarn.lock` after upgrading neetoUI, ensuring a clean and traceable state before proceeding with further migration steps.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Migration-Guide/v3tov4.stories.mdx#_snippet_1

LANGUAGE: shell
CODE:
```
git commit -m "Upgraded neetoUI to v4"
```

----------------------------------------

TITLE: Importing NeetoUI Pagination Component
DESCRIPTION: This snippet demonstrates the standard way to import the Pagination component from the `@bigbinary/neetoui` library. This import statement is essential for utilizing the component within a JavaScript or TypeScript application.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/PaginationStoriesDocs/PaginationDocs.mdx#_snippet_0

LANGUAGE: TypeScript
CODE:
```
import { Pagination } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Example: Overriding neeto-ui Toastr Background Colors
DESCRIPTION: This example demonstrates how to override specific CSS variables for the neeto-ui Toastr component. By targeting the `.neetix-toastr` class, developers can change the background colors for info, error, success, and warning toastr types, providing a custom appearance. This showcases the flexibility offered by CSS variables for component styling.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Overlays/ToastrStoriesDocs/ToastrCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-toastr {
  --neeto-ui-info-toastr-bg-color: rgb(var(--neeto-ui-gray-800));
  --neeto-ui-error-toastr-bg-color: rgb(var(--neeto-ui-gray-800));
  --neeto-ui-success-toastr-bg-color: rgb(var(--neeto-ui-gray-800));
  --neeto-ui-warning-toastr-bg-color: rgb(var(--neeto-ui-gray-800));
}
```

----------------------------------------

TITLE: Using neeto-ui Colors as CSS Variables
DESCRIPTION: This CSS example demonstrates how to apply `neeto-ui` colors using CSS variables. The `rgb(var(--neeto-ui-white))` syntax allows referencing predefined color variables within CSS properties.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersColor.stories.mdx#_snippet_5

LANGUAGE: css
CODE:
```
a {
   color: rgb(var(--neeto-ui-white));
}
```

----------------------------------------

TITLE: Example: Overriding neeto-ui Pane Background Color
DESCRIPTION: Illustrates how to apply a custom background color to the `Pane` component's wrapper by overriding the `--neeto-ui-pane-wrapper-bg-color` CSS variable within a custom CSS class, demonstrating the customization capability.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Overlays/PaneStoriesDocs/PaneCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-pane {
  --neeto-ui-pane-wrapper-bg-color: rgb(var(--neeto-ui-gray-100));
}
```

----------------------------------------

TITLE: Adding Transparency to neeto-ui CSS Variables
DESCRIPTION: This CSS example illustrates how to apply transparency to `neeto-ui` colors when used as CSS variables. By wrapping the variable in `rgba()` and providing an alpha value, developers can control the opacity of the color.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersColor.stories.mdx#_snippet_6

LANGUAGE: css
CODE:
```
a {
  color: rgba(var(--neeto-ui-primary-600), 0.5);
}
```

----------------------------------------

TITLE: Example: Override neeto-ui MultiEmailInput Counter Color with CSS
DESCRIPTION: This example demonstrates how to override a specific CSS variable, `--neeto-ui-multi-email-input-counter-color`, for the `MultiEmailInput` component. By applying a custom class like `.neetix-email-input`, developers can change the counter's text color, here set to a primary brand color, showcasing the flexibility of CSS variable customization.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/MultiEmailInputStoriesDocs/MultiEmailInputCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-email-input {
  --neeto-ui-multi-email-input-counter-color: rgb(var(--neeto-ui-primary-500));
}
```

----------------------------------------

TITLE: Dropdown Integration Best Practices in NeetoUI Table
DESCRIPTION: Guidelines for integrating `Dropdown` components within the NeetoUI Table, recommending specific `strategy` and `appendTo` props to prevent clipping and `z-index` issues, especially for tables with few rows or fixed columns.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TableStoriesDocs/TableDocs.mdx#_snippet_3

LANGUAGE: APIDOC
CODE:
```
Dropdown Usage in Table:
- When using `Dropdown` inside the Table, it is recommended to pass the `strategy` prop as `fixed` for the `Dropdown` component. This prevents the dropdown from being hidden by the Table container overflow, especially for tables with very few rows of data.
- For `Dropdown` components used inside fixed columns, to avoid clipping or `z-index` issues, please use `appendTo={() => document.body}` along with the `strategy="fixed"` props for the `Dropdown`.
```

----------------------------------------

TITLE: Example: Overriding neeto-ui Label Component CSS Variables
DESCRIPTION: Demonstrates how to override the default CSS variables for the `Label` component within a custom CSS class, changing its font size and font weight to desired values.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/LabelStoriesDocs/LabelCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-label {
  --neeto-ui-label-font-size: var(--neeto-ui-text-base);
  --neeto-ui-label-font-weight: var(--neeto-ui-font-normal);
}
```

----------------------------------------

TITLE: Customizing neeto-ui Tag Outline Primary Type
DESCRIPTION: This example demonstrates how to override the default CSS variables for a specific variant of the `Tag` component, specifically the `outline primary` type. It shows how to change the background, border, and text colors to achieve a custom look.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TagStoriesDocs/TagCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neeto-ui-tag--type-outline.neetix-tag--primary {
  --neeto-ui-tag-bg-color: rgb(var(--neeto-ui-gray-100));
  --neeto-ui-tag-border-color: rgb(var(--neeto-ui-gray-800));
  --neeto-ui-tag-color: rgb(var(--neeto-ui-black));
}
```

----------------------------------------

TITLE: Importing Accordion Component in JavaScript
DESCRIPTION: Demonstrates how to import the Accordion component from the @bigbinary/neetoui library for use in a JavaScript or React application.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/AccordionStoriesDocs/AccordionDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Accordion } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Optimizing Table Performance with Fixed Width Columns
DESCRIPTION: Provides an example of defining columns with explicit `width` properties to improve horizontal scrolling performance across browsers and prevent `ResizeObserver - limit exceeded` errors in the NeetoUI Table component.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TableStoriesDocs/TableDocs.mdx#_snippet_4

LANGUAGE: jsx
CODE:
```
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 75,
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "GUID",
    dataIndex: "guid",
    key: "guid",
    width: 150,
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "First Name",
    dataIndex: "first_name",
    key: "first_name",
    width: 150,
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    key: "last_name",
    width: 150,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: 200,
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "Company Name",
    dataIndex: "company_name",
    key: "company_name",
    ellipsis: {
      showTitle: false,
    },
    width: 75,
  },
];

const UserTable = () => (
  <Table
    columnData={columns}
    // other props
  />
);
```

----------------------------------------

TITLE: Importing neetoUI BlockNavigation Component
DESCRIPTION: This snippet demonstrates the standard way to import the `BlockNavigation` component from the `@bigbinary/neetoui/formik` package. This import is the first step to integrate the navigation blocking functionality into a React application.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Formik/BlockNavigationStories.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { BlockNavigation } from "@bigbinary/neetoui/formik";
```

----------------------------------------

TITLE: Implement Click Handler for Table More Actions
DESCRIPTION: This example demonstrates how to attach the `onMoreActionClick` prop to the `Table` component. This callback function is triggered when a user interacts with a 'more action', providing the action's `type` and the corresponding `column` object for custom logic execution.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TableStoriesDocs/MoreActionsOnHeaderDocs.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
<Table
  rowData={TABLE_DATA}
  columnData={columns}
  onMoreActionClick={(type, column) => {
    // Do your actions here.
  }}
/>
```

----------------------------------------

TITLE: Importing the Label Component in neeto-ui
DESCRIPTION: This snippet demonstrates the standard way to import the `Label` component from the `@bigbinary/neetoui` library into a JavaScript or TypeScript file, making it available for use in your application's UI.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/LabelStoriesDocs/LabelDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Label } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Apply neetoUI Primary Color with Transparency Using CSS Variable
DESCRIPTION: This example shows how to add transparency to a color defined by a neetoUI CSS variable. The `rgba()` function is used, combining the RGB values from `--neeto-ui-primary-600` with an alpha value of 0.5 for 50% opacity.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Customize/CSSVariables.stories.mdx#_snippet_2

LANGUAGE: css
CODE:
```
a {
  color: rgba(var(--neeto-ui-primary-600), 0.5);
}
```

----------------------------------------

TITLE: Customizing neeto-ui Pagination Component with CSS Variables
DESCRIPTION: This example demonstrates how to override specific CSS variables to customize the `Pagination` component's appearance. By defining these variables within a custom CSS class, developers can easily change properties like item width, height, and the active state's background and border colors.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/PaginationStoriesDocs/PaginationCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-pagination {
  --neeto-ui-pagination-item-width: 32px;
  --neeto-ui-pagination-item-height: 32px;
  --neeto-ui-pagination-item-active-border-color: rgb(var(--neeto-ui-gray-800));
  --neeto-ui-pagination-item-active-bg-color: rgb(var(--neeto-ui-gray-800));
}
```

----------------------------------------

TITLE: Apply neetoUI Primary Color Using CSS Variable
DESCRIPTION: This example demonstrates how to use a neetoUI CSS variable (`--neeto-ui-primary-600`) to set the color of an anchor tag. The `rgb()` function is used to apply the color defined by the variable.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Customize/CSSVariables.stories.mdx#_snippet_1

LANGUAGE: css
CODE:
```
a {
  color: rgb(var(--neeto-ui-primary-600));
}
```

----------------------------------------

TITLE: neetoUI Formik `Form` Component Props
DESCRIPTION: This section details the available props for the `Form` component within neetoUI's Formik integration. These props control the behavior and appearance of the form, including Formik-specific configurations and rendering options.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/README.md#_snippet_9

LANGUAGE: APIDOC
CODE:
```
Form Component Props:
  formikProps: object
    - Description: Formik props object. You can pass `initialValues`, `validationSchema`, `onSubmit` etc. as props to the `Form` component.
  children: function | JSX.Element
    - Description: You can pass a function as `children` to the `Form` component. The function will receive the formik props object as an argument. Or you can directly pass the `children` inside the `Form` component.
  className: string
    - Description: You can use this prop to provide a custom class to the form.
  formProps: object
    - Description: Form props object. You can pass `className`, `style` etc. as props to the `Form` component.
  scrollToErrorField: boolean
    - Description: To specify whether scroll to error field on clicking submit button is enabled or not. Default value is false.
```

----------------------------------------

TITLE: Customizing neeto-ui Kbd Component CSS Variables
DESCRIPTION: This example demonstrates how to override the default CSS variables for the `Kbd` component. By defining new values for these variables within a custom CSS class, developers can easily change the component's appearance, such as its font size, colors, and dimensions.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/KbdStoriesDocs/KbdCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-kbd {
  --neeto-ui-kbd-font-size: var(--neeto-ui-text-base);
  --neeto-ui-kbd-color: rgb(var(--neeto-ui-primary-800));
  --neeto-ui-kbd-bg-color: rgb(var(--neeto-ui-primary-100));
  --neeto-ui-kbd-border-radius: var(--neeto-ui-rounded-sm);
  --neeto-ui-kbd-min-width: 32px;
  --neeto-ui-kbd-height: 32px;
}
```

----------------------------------------

TITLE: Importing the Tree Component in NeetoUI
DESCRIPTION: This snippet demonstrates the standard way to import the `Tree` component from the `@bigbinary/neetoui` library into a JavaScript or TypeScript application, making it available for use in UI development.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TreeStoriesDocs/TreeDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Tree } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Apply Custom CSS to Storybook Demo Table Rows
DESCRIPTION: This CSS snippet customizes the appearance of table rows within the Storybook demo table. It specifically sets the background of `tr` elements to transparent, overriding default styles. This ensures a clean and consistent visual presentation for the shadow examples.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersBoxShadows.stories.mdx#_snippet_2

LANGUAGE: css
CODE:
```
.story-demo-table tr{
      background: transparent !important;
  }
```

----------------------------------------

TITLE: Import all neetoUI components using wildcard import for dynamic rendering
DESCRIPTION: For scenarios requiring dynamic component rendering, you can perform a wildcard import of all neetoUI components. This makes them accessible via an object (e.g., `NeetoUI`), allowing you to reference and render components by name at runtime.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/README.md#_snippet_5

LANGUAGE: JSX
CODE:
```
import React from "react";
import * as NeetoUI from "@bigbinary/neetoui";

export default function index() {
  const Button = NeetoUI.Button;

  // get a random component
  const componentName = Math.random() > 0.5 ? "Badge" : "Avatar";
  const MyDynamicComponent = NeetoUI[componentName];

  return (
    <div>
      <Button />
      <MyDynamicComponent />
    </div>
  );
}
```

----------------------------------------

TITLE: Customize neeto-ui Avatar Component Border Radius
DESCRIPTION: This example demonstrates how to override the default CSS variables for the `neeto-ui` Avatar component within a custom CSS class. By targeting the `.neetix-avatar` class, it modifies the border-radius of both the avatar's container and the avatar image itself to a larger, more rounded style, showcasing practical component customization.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/AvatarStoriesDocs/AvatarCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-avatar {
  --neeto-ui-avatar-container-border-radius: var(--neeto-ui-rounded-lg);
  --neeto-ui-avatar-border-radius: var(--neeto-ui-rounded-lg);
}
```

----------------------------------------

TITLE: NeetoUI Table `columnData` Property Reference
DESCRIPTION: Detailed documentation for the properties available within a `columnData` definition object for the NeetoUI Table component, outlining their purpose, accepted types, and specific behaviors.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TableStoriesDocs/TableDocs.mdx#_snippet_2

LANGUAGE: APIDOC
CODE:
```
columnData Properties:
- `title`: The title of a column. Accepts a valid React Node (string | number | JSX) or a callback that returns a React Node. A hash with `sortOrder`, `sortColumn`, and `filters` as keys are available as a parameter to the callback.
- `dataIndex`: The unique key over which the row data is mapped for the particular column. Accepts a string or an array of strings.
- `key`: Unique identifier of a column. Accepts a string.
- `render`: Defines how data should be rendered within the column. Accepts a callback that returns a React Node.
- `width`: Width of a column. Accepts a string or a number. Default value is `auto`.
```

----------------------------------------

TITLE: Customizing neeto-ui Spinner Component CSS Variables
DESCRIPTION: This example demonstrates how to override the default CSS variables for the `Spinner` component within a custom CSS class. By targeting a specific class like `.neetix-spinner`, you can modify the spinner's size and color to match your application's design.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/SpinnerStoriesDocs/SpinnerCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-spinner {
  --neeto-ui-spinner-size: 32px;
  --neeto-ui-spinner-color: rgb(var(--neeto-ui-primary-500));
}
```

----------------------------------------

TITLE: Importing DatePicker Component in neeto-ui
DESCRIPTION: This snippet demonstrates the standard way to import the `DatePicker` component from the `@bigbinary/neetoui` library. Once imported, the component can be used in React applications to provide date selection functionality, leveraging Ant Design's underlying implementation for robust features and customization.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/DateInputStoriesDocs/DateInputDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { DatePicker } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Customizing neeto-ui ProgressBar Appearance
DESCRIPTION: This example demonstrates how to override the default CSS variables for the `neeto-ui` ProgressBar component within a custom CSS class. By redefining these variables, you can change the progress bar's background, fill color, and text color to match specific themes, such as a success state.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/ProgressBarDocs/ProgressBarCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-progress-bar {
  --progress-bar-background: rgb(var(--neeto-ui-success-100));
  --progress-bar-color: rgb(var(--neeto-ui-success-600));
  --progress-value-text-color: rgb(var(--neeto-ui-primary-100));
}
```

----------------------------------------

TITLE: Install neetoUI package using Yarn
DESCRIPTION: This command installs the neetoUI package into your application using Yarn. It's the primary way to add the library to your project, ensuring all necessary files are downloaded and configured.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/README.md#_snippet_0

LANGUAGE: Shell
CODE:
```
yarn add @bigbinary/neetoui
```

----------------------------------------

TITLE: Import TreeSelect Component in JavaScript
DESCRIPTION: Demonstrates how to import the `TreeSelect` component from the `@bigbinary/neetoui` library. This component leverages Ant Design's `TreeSelect` internally, allowing for further customization options available in the Ant Design documentation.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TreeSelectStoriesDocs/TreeSelectDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { TreeSelect } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Customizing neeto-ui Switch Checked State Background and Color
DESCRIPTION: This example demonstrates how to override specific CSS variables to change the background color and switch color of the neeto-ui Switch component when it is in the checked state. By applying these custom variables within a CSS class, developers can easily integrate the switch's appearance with their application's theme, such as using a primary brand color.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/SwitchStoriesDocs/SwitchCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-radio {
  --neeto-ui-switch-item-checked-bg-color: rgb(var(--neeto-ui-primary-500));
  --neeto-ui-switch-checked-color: rgb(var(--neeto-ui-primary-500));
}
```

----------------------------------------

TITLE: Customizing neeto-ui Slider Handle CSS Variables
DESCRIPTION: This example demonstrates how to override the default CSS variables for the neeto-ui Slider component's handle within a custom CSS class. By targeting the '.neetix-slider' class, you can change the box-shadow colors to suit your application's theme, such as using success-themed colors.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/SliderStoriesDocs/SliderCSSCustomization.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.neetix-slider {
  --neeto-ui-slider-handle-box-shadow: 0 0 0 2px rgb(var(--neeto-ui-success-600));
  --neeto-ui-slider-handle-focus-box-shadow: 0 0 0 4px rgb(var(--neeto-ui-success-500));
}
```

----------------------------------------

TITLE: Import specific neetoUI components using named exports
DESCRIPTION: neetoUI exports all its components as named exports. This allows you to selectively import only the components you need, such as `Button` and `Tooltip`, to reduce bundle size and improve application performance.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/README.md#_snippet_4

LANGUAGE: JSX
CODE:
```
import { Button, Tooltip } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Build neetoUI Storybook Static Files
DESCRIPTION: This command builds the static files for the neetoUI Storybook application. This is typically done for deploying Storybook as a static site for documentation or showcase purposes.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/README.md#_snippet_14

LANGUAGE: bash
CODE:
```
yarn build
```

----------------------------------------

TITLE: Storybook MDX Imports
DESCRIPTION: Imports necessary modules and assets for a Storybook MDX documentation page, including Storybook's `Meta` component, neetoicons, and local image assets.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Language.stories.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
import { Meta } from "@storybook/addon-docs";
import { Check, Close } from "neetoicons";
import NoDataTodo from "../assets/images/no-data-do.png";
import ArchiveExample from "../assets/images/archive.png";
import DeactivateExample from "../assets/images/deactivate.png";
```

----------------------------------------

TITLE: Importing neeto-ui Button Component
DESCRIPTION: This snippet demonstrates how to import the `Button` component from the `@bigbinary/neetoui` library. The `Button` component itself is designed to allow users to trigger actions or functions with a single click, serving as a primary interactive element in user interfaces.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/ButtonStoriesDocs/ButtonDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Button } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Install neetoUI Development Dependencies
DESCRIPTION: This command installs all necessary project dependencies for neetoUI development. It should be run after cloning the repository to set up the development environment.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/README.md#_snippet_10

LANGUAGE: bash
CODE:
```
yarn
```

----------------------------------------

TITLE: neetoUI Pane Component Specifications
DESCRIPTION: Defines design and functional specifications for neetoUI Pane components, including button dimensions, spacing, and loading state behavior, mirroring the consistency approach of Modals and Alerts.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/__wiki__/neetoUI-Audit.md#_snippet_1

LANGUAGE: APIDOC
CODE:
```
Pane Component Specifications:

Pane Close Button:
  - Type: icon-only button
  - Dimensions: 28x28px

Pane Footer Buttons:
  - Submit Button:
    - Style: primary
    - Size: large
  - Cancel Button:
    - Style: text
    - Size: large

Pane Footer Buttons Spacing:
  - Value: 8px

Pane Loading State:
  - Prop: boolean `loading`
  - UI Behavior: empty UI state when `loading` is true.
```

----------------------------------------

TITLE: Importing NeetoUI TimePicker Component
DESCRIPTION: Demonstrates how to import the TimePicker component from the `@bigbinary/neetoui` library into a JavaScript or TypeScript project. This component allows users to select a specific time and internally leverages Ant Design's TimePicker for its core functionality.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TimePickerStoriesDocs/TimePickerDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { TimePicker } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Importing Input Component in React
DESCRIPTION: This snippet demonstrates the standard way to import the `Input` component from the `@bigbinary/neetoui` library into a JavaScript or TypeScript React application. The `Input` component is a versatile UI element designed for capturing user inputs, commonly used in forms, search functionalities, and other data entry interfaces.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/InputStoriesDocs/InputDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Input } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Table of Contents Data for Language Guidelines
DESCRIPTION: Defines a JavaScript array of objects, used to generate a table of contents or navigation for language guidelines documentation, with each object containing an ID and a display title.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Language.stories.mdx#_snippet_3

LANGUAGE: javascript
CODE:
```
export const data = [
  { id: "general-language", title: "General language" },
  { id: "headings-and-subheadings", title: "Headings and subheadings" },
  { id: "buttons", title: "Buttons" },
  { id: "links", title: "Links" },
  { id: "create-vs-add", title: "Create vs. add" },
  { id: "save-vs-done", title: "Save vs. done" },
  { id: "archive-vs-deactivate", title: "Archive vs. deactivate" },
  { id: "cancel-action", title: "Cancel action" },
  { id: "confirmations", title: "Confirmations" },
  { id: "error-text", title: "Error text" },
  { id: "help-text", title: "Help text" },
  { id: "toastr-messages", title: "Toastr messages" },
  { id: "no-data-screens", title: "No data screens" },
  { id: "references", title: "References" }
];
```

----------------------------------------

TITLE: Build neetoUI Package Bundle
DESCRIPTION: This command builds and bundles the neetoUI package. It's used to verify that the project can be successfully compiled and packaged for distribution after making changes.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/README.md#_snippet_13

LANGUAGE: bash
CODE:
```
yarn bundle
```

----------------------------------------

TITLE: Using neetoUI Formik Form with Direct Children
DESCRIPTION: This snippet illustrates an alternative way to use neetoUI's `Form` component where `children` are passed directly as JSX elements instead of a function. It still requires `formikProps` for core Formik functionalities like validation and submission.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/README.md#_snippet_8

LANGUAGE: jsx
CODE:
```
import * as Yup from "yup";
import { Form } from "@bigbinary/neetoui/formik";

<Form
  formikProps={{
    initialValues: {
      name: "",
      email: ""
    },
    onSubmit: (values, formikbag) => {
      console.log(values, formikbag);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required")
    })
  }}
  className="w-full space-y-6"
>
  <>
    <Input {...props} label="Name" name="name" />
    <Input {...props} label="Email" name="email" />
    <Button label="Submit" type="submit" style="primary" />
  </>
</Form>;
```

----------------------------------------

TITLE: Importing Tag Component in NeetoUI
DESCRIPTION: This snippet demonstrates how to import the `Tag` component from the `@bigbinary/neetoui` library. The `Tag` component is used to categorize or identify content, items, or entities within a user interface, enhancing content organization and searchability.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TagStoriesDocs/TagDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Tag } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Importing NeetoUI Dropdown Component
DESCRIPTION: Demonstrates the standard ES module import statement for bringing the `Dropdown` component into a JavaScript or React application from the `@bigbinary/neetoui` library. This is the first step to utilize the component.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/DropdownStoriesDocs/DropdownDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Dropdown } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Importing and Using Overlay Manager in React
DESCRIPTION: Shows how to import the `manager` object from the `neetoui/managers` module in a React (JSX) context. It then demonstrates calling the `hasOverlays()` and `getTopMostOverlay()` methods to interact with the overlay manager from a host application.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Managers/OverlayManager.stories.mdx#_snippet_2

LANGUAGE: jsx
CODE:
```
import { manager } from "neetoui/managers";

const hasOverlays = manager.hasOverlays();
const topMostOverlay = manager.getTopMostOverlay();
```

----------------------------------------

TITLE: Importing Callout Component in JavaScript
DESCRIPTION: This snippet demonstrates how to import the `Callout` component from the `@bigbinary/neetoui` library into a JavaScript or TypeScript file. The `Callout` component itself is a visually distinct element designed to highlight important information, messages, or notifications on a web page.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/CalloutStoriesDocs/CalloutDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Callout } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Importing ActionDropdown Component
DESCRIPTION: This snippet demonstrates how to import the ActionDropdown component from the @bigbinary/neetoui library, making it available for use in a React application.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/ActionDropdownStoriesDocs/ActionDropdownDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { ActionDropdown } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Basic Table Component Usage in NeetoUI
DESCRIPTION: Demonstrates the fundamental structure for using the NeetoUI Table component, including defining `columnData` for column headers and `rowData` for the table's content.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TableStoriesDocs/TableDocs.mdx#_snippet_0

LANGUAGE: jsx
CODE:
```
const columnData = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 75,
    sorter: (a, b) => a.id - b.id,
  },
  // Other column defenitions
];

const rowData = [
  {
    id: 1,
    // Data for other columns
  },
  {
    id: 2,
    // Data for other columns
  },

  // Other rows
];

<Table columnData={columnData} rowData={rowData} />;
```

----------------------------------------

TITLE: Import ColorPicker Component in JavaScript
DESCRIPTION: This snippet demonstrates how to import the ColorPicker component from the `@bigbinary/neetoui` library for use in a JavaScript or TypeScript application. The `ColorPicker` component allows users to select and choose colors within a UI.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/ColorPickerStoriesDocs/ColorPickerDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { ColorPicker } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: neetoUI Modal & Alert Component Specifications
DESCRIPTION: Defines design and functional specifications for neetoUI Modal and Alert components, including button dimensions, spacing, and loading state behavior, aiming for improved consistency and user experience.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/__wiki__/neetoUI-Audit.md#_snippet_0

LANGUAGE: APIDOC
CODE:
```
Modal/Alert Component Specifications:

Header Bottom Spacing:
  - Discussion on consistency and alignment with header text.
  - Proposed solution: Align Modal Close icon with Header text for a compact look.

Modal Close Button:
  - Type: icon-only button
  - Dimensions: 28x28px

Modal Footer Buttons:
  - Submit Button:
    - Style: primary
    - Size: large
  - Cancel Button:
    - Style: text
    - Size: large

Modal Footer Buttons Spacing:
  - Value: 8px

Modal Loading State:
  - Prop: boolean `loading`
  - UI Behavior: empty UI state when `loading` is true.

Alert Loading State:
  - UI Behavior: PageLoader (implies a specific loader component for Alerts).
```

----------------------------------------

TITLE: Importing Textarea Component in JavaScript
DESCRIPTION: Demonstrates the standard ES6 import syntax to bring the Textarea component into a JavaScript or React application from the `@bigbinary/neetoui` library. This component allows users to input multiple lines of text.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TextareaStoriesDocs/TextareaDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Textarea } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Importing Popover Component in NeetoUI
DESCRIPTION: This snippet demonstrates the standard way to import the `Popover` component from the `@bigbinary/neetoui` library into a JavaScript or TypeScript project. The `Popover` component itself is a UI element that appears as a floating card, providing additional information or options when triggered by user interaction with an associated element.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Overlays/PopoverStoriesDocs/PopoverDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Popover } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Import Storybook and UI Dependencies
DESCRIPTION: Imports core Storybook components like `Meta` for documentation, `useDarkMode` for theme switching, and `colorPaletteList` for color data, along with a custom `InlineComponent`.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersBorderColor.stories.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Meta } from "@storybook/addon-docs";
import { useDarkMode } from "storybook-dark-mode";
import { colorPaletteList } from "../ColorPalette.js";
import InlineComponent from "./InlineComponent";
```

----------------------------------------

TITLE: Importing MultiEmailInput Component in JavaScript
DESCRIPTION: This snippet demonstrates how to import the `MultiEmailInput` component from the `@bigbinary/neetoui` library. This component is designed to facilitate the input of multiple email addresses within a single form field, enhancing user experience for email collection in web applications.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/MultiEmailInputStoriesDocs/MultiEmailInputDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { MultiEmailInput } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Apply Hover State Utility Classes in neeto-ui
DESCRIPTION: Demonstrates how to use the `hover:` prefix with neeto-ui utility classes to apply styles on hover for properties like color, background, border, and box shadow. These classes modify element appearance when the mouse cursor is over them, providing interactive visual feedback.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HoverFocusAndOtherStates.stories.mdx#_snippet_0

LANGUAGE: HTML
CODE:
```
<b class="hover:neeto-ui-text-success-500">Aa</b>
```

LANGUAGE: HTML
CODE:
```
<div class="flex w-12 h-12 cursor-pointer neeto-ui-bg-gray-100 hover:neeto-ui-bg-success-500"></div>
```

LANGUAGE: HTML
CODE:
```
<div class="flex w-12 h-12 border cursor-pointer neeto-ui-border-gray-200 hover:neeto-ui-border-gray-500"></div>
```

LANGUAGE: HTML
CODE:
```
<div class="flex w-12 h-12 cursor-pointer neeto-ui-shadow-xs hover:neeto-ui-shadow-m"></div>
```

----------------------------------------

TITLE: Importing neeto-ui Modal Component
DESCRIPTION: This snippet demonstrates the standard way to import the `Modal` component from the `@bigbinary/neetoui` library. The `Modal` component is a UI element that creates a temporary overlay, requiring user interaction before the underlying page content can be accessed. It's typically used for displaying critical information, forms, or confirmations.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Overlays/ModalStoriesDocs/ModalDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Modal } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Custom Column Definition and Rendering with `columnData`
DESCRIPTION: Illustrates how to define custom columns using the `columnData` prop, including advanced rendering with a `render` function for displaying avatars and combining data from multiple `dataIndex` properties.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TableStoriesDocs/TableDocs.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
const columnData = [
  {
    title: "First Name",
    dataIndex: "first_name",
    key: "first_name",
    width: 150,
    // the 'key' property from all the columns is available as the argument to the render method
    render: (first_name, last_name) => {
      return (
        <div className="flex flex-row items-center">
          <Avatar
            user={{ name: `${first_name} ${last_name}` }}
            size="small"
            className="mr-2"
          />
          {first_name}
        </div>
      );
    },
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    key: "last_name",
    width: 150,
  },
  // other columns
];
```

----------------------------------------

TITLE: Basic Overlay Manager Query Methods
DESCRIPTION: Demonstrates the fundamental methods available to query the overlay manager's state. `hasOverlays()` checks if any overlays are currently active, and `getTopMostOverlay()` retrieves the overlay at the top of the stack.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Managers/OverlayManager.stories.mdx#_snippet_0

LANGUAGE: js
CODE:
```
hasOverlays(); // returns true if there are overlays in the stack
getTopMostOverlay(); // returns the top most overlay in the stack
```

----------------------------------------

TITLE: Importing Select Component from NeetoUI
DESCRIPTION: This code snippet demonstrates the standard way to import the `Select` component from the `@bigbinary/neetoui` library into a JavaScript or React application. This import statement is essential before the component can be used to render dropdown selection menus.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/SelectStoriesDocs/SelectDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Select } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Import Kbd Component in JavaScript/TypeScript
DESCRIPTION: This snippet demonstrates how to import the `Kbd` component from the `@bigbinary/neetoui` library. Importing this component makes it available for use in your JavaScript or TypeScript application to render keyboard-related information.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/KbdStoriesDocs/KbdDocs.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
import { Kbd } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Importing neetoUI ActionBlock Component
DESCRIPTION: This snippet demonstrates the standard way to import the `ActionBlock` component from the `@bigbinary/neetoui/formik` package. The `ActionBlock` component is specifically designed to serve as a standardized footer element within Formik forms, offering customizable primary and secondary buttons for consistent UI across applications.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Formik/ActionBlockStories.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { ActionBlock } from "@bigbinary/neetoui/formik";
```

----------------------------------------

TITLE: Importing NoData Component in JavaScript/TypeScript
DESCRIPTION: Demonstrates the standard way to import the `NoData` component from the `@bigbinary/neetoui` library into a JavaScript or TypeScript project. This component is typically used to render a visual message when there is no data to display in a UI section.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/NoDataStoriesDocs/NoDataDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { NoData } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Render Font Weight Helper Usage Table in React/JSX
DESCRIPTION: This React/JSX snippet dynamically generates an HTML table to display and demonstrate the usage of Neeto UI font weight helpers. It iterates through the `fontWeightHelpers` array, rendering a visual preview, the corresponding CSS variable name, and the utility class for each defined font weight.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersFontWeight.stories.mdx#_snippet_2

LANGUAGE: jsx
CODE:
```
<table className="table-auto">
  <thead>
    <tr>
      <td className="border p-2">Preview</td>
      <td className="border p-2">CSS Variable</td>
      <td className="border p-2">Class</td>
    </tr>
  </thead>
  <tbody>
    {fontWeightHelpers.map((helper) => {
      return (
        <tr key={helper.name}>
          <td className="neeto-ui-bg-gray-800 p-2">
            <div className="p-6">
              <div
                className={`w-46 h-18 flex items-center justify-center p-3 rounded-sm neeto-ui-bg-white neeto-ui-text-black ${helper.name.replace(
                  "$neeto-ui",
                  "neeto-ui"
                )}`}
              >
                {helper.compiledValue}
              </div>
            </div>
          </td>
          <td className="border p-2">
            <code>{`${helper.name.replace("$neeto-ui", "--neeto-ui")}`}</code>
          </td>
          <td className="border p-2">
            <div className="flex justify-between">
              <code>{`${helper.name.replace("$neeto-ui", "neeto-ui")}`}</code>
            </div>
          </td>
        </tr>
      );
    })}
  </tbody>
</table>
```

----------------------------------------

TITLE: NeetoUI Storybook Global CSS Styles
DESCRIPTION: Defines comprehensive CSS rules for the Storybook documentation pages, including background gradients, hero banner layout, typography, responsive adjustments, and styling for featured content blocks.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Introduction/Welcome.stories.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.sbdocs-wrapper{
    background: linear-gradient(rgb(255, 255, 255) 0%, rgb(247, 255, 247) 100%);
    background-size:cover;
  }

  .sbdocs .sbdocs-hero-banner{
    display:flex;
    align-items:center;
    gap: 20px;
    margin-bottom: 50px;
  }

  .sbdocs .sbdocs-hero-banner__title{
    display:flex;
    flex-wrap: wrap;
    align-items:baseline;
    line-height:1.1;
    -webkit-font-smoothing: initial;
    font-size: 40px;
  }

  .sbdocs .sbdocs-hero-banner__desc{
    color:#000 !important;
    font-weight: 400;
    font-size: 18px;
    max-width:80ch;
    -webkit-font-smoothing: initial;
  }

  .sbdocs .sbdocs-hero-banner__desc a{
    color:#000 !important;
    text-decoration: underline;
    -webkit-font-smoothing: initial;
    font-family: "Inter",sans-serif !important;
  }

  .sbdocs .sbdocs-hero-banner__title strong {
    font-weight: bold;
    user-select:none;
    color:#000;
    margin-right:10px;
    -webkit-font-smoothing: initial;
  }

  @media (min-width: 640px){
    .sbdocs .sbdocs-hero-banner__title{
      font-size: 70px;
    }
  }

  @media (max-width: 539px){
    .sbdocs-hero-banner__desc br{
      display:none;
    }
  }

  .sbdocs-featured{
    display:flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .sbdocs-featured__item{
    width: 100%;
    border-radius: 12px;
    padding: 30px;
    background: #fff;
    display:flex;
    flex-direction:column;
    position: relative;
    user-select:none;
    transition:all 0.3s;
    font-family: "Inter",sans-serif !important;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
     -webkit-font-smoothing: initial;
  }

  .sbdocs-hero-banner__img-wrapper{
    display:none;
  }

  @media (min-width: 640px){
    .sbdocs-featured__item{
      width: calc(33.33% - 20px);
      min-width: 210px;
    }
    .sbdocs-hero-banner__img-wrapper{
      display: inline-block;
    }
  }

  .sbdocs-featured__item:hover{
    transform:scale(1.05);
  }

  .sbdocs-featured__item-abs-link{
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    z-index:1;
  }

  .sbdocs-featured__item h4{
    font-size: 22px !important;
    position: relative;
    color:#000 !important;
    -webkit-font-smoothing: initial;
  }

  .sbdocs-featured__item p{
    color:#000 !important;
    -webkit-font-smoothing: initial;
    margin-top:0;
    font-size:16px;
  }

  .sbdocs-featured__item-link{
    margin-top:auto;
    display: inline-flex;
    color:#000;
    font-weight:500;
     -webkit-font-smoothing: initial;
    text-decoration: underline;
  }
```

----------------------------------------

TITLE: Import React Toastify stylesheet for neetoUI
DESCRIPTION: neetoUI depends on `react-toastify` for its Toaster components. This SCSS import is necessary to include the required styles for the toast notifications provided by `react-toastify`, ensuring they are displayed correctly.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/README.md#_snippet_2

LANGUAGE: SCSS
CODE:
```
@import "react-toastify/dist/ReactToastify.min.css";
```

----------------------------------------

TITLE: Storybook Meta Component Configuration
DESCRIPTION: Configures the Storybook documentation page metadata and view parameters. It sets the page title and hides the canvas preview tab, forcing the documentation view mode for the 'Colors' section.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Color.stories.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
Storybook Meta Component:
  __props__:
    title: string - The title displayed in Storybook's sidebar for the story/page.
    parameters: object - Configuration options for the Storybook UI and addons.
      viewMode: string ('docs' | 'canvas') - Sets the default view mode for the story. 'docs' displays the documentation page.
      previewTabs: object - Controls the visibility and order of preview tabs.
        canvas: object - Configuration for the 'Canvas' tab.
          hidden: boolean - If true, hides the 'Canvas' tab from the UI.

Example Usage:
<Meta
  title="Foundation/Colors"
  parameters={{
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true }
    }
  }}
/>
```

----------------------------------------

TITLE: Render Line Height Helper Documentation Table with React
DESCRIPTION: Renders an HTML table using React JSX, dynamically populating its rows by mapping over the `lineHeightHelpers` array. Each row displays a visual preview of the line height, its compiled value, the corresponding CSS variable name, and the utility class name, providing a comprehensive overview of each helper.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersLineHeight.stories.mdx#_snippet_3

LANGUAGE: JavaScript
CODE:
```
<table className="table-auto">
  <thead>
    <tr>
      <td className="border p-2">Preview</td>
      <td className="border p-2">Name</td>
      <td className="border p-2">CSS Variable</td>
      <td className="border p-2">Class</td>
    </tr>
  </thead>
  <tbody>
    {lineHeightHelpers.map((helper) => {
      return (
        <tr key={helper.name}>
          <td className="neeto-ui-bg-gray-800 p-2">
            <div className="p-6">
              <div
                className={`w-46 h-18 flex items-center justify-center p-3 rounded-sm neeto-ui-text-black neeto-ui-bg-white ${helper.name.replace(
                  "$neeto-ui",
                  "neeto-ui"
                )}`}
              >
                Lorem Ipsum is simply<br />
                dummy textof the<br />
                printing and typesetting<br />
                industry
              </div>
            </div>
          </td>
          <td className="border p-2">
            <div className="p-6">
              <div>
                {helper.compiledValue}
              </div>
            </div>
          </td>
          <td className="border p-2">
            <code>{`${helper.name.replace("$neeto-ui", "--neeto-ui")}`}</code>
          </td>
          <td className="border p-2">
            <div className="flex justify-between">
              <code>{`${helper.name.replace("$neeto-ui", "neeto-ui")}`}</code>
            </div>
          </td>
        </tr>
      );
    })}
  </tbody>
</table>
```

----------------------------------------

TITLE: Importing Alert Component in JavaScript/TypeScript
DESCRIPTION: This snippet demonstrates the standard ES module import syntax for bringing the `Alert` component into a JavaScript or TypeScript file from the `@bigbinary/neetoui` library. The `Alert` component is designed as a modal dialog to display important messages, warnings, or notifications that require immediate user attention or acknowledgment.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Overlays/AlertStoriesDocs/AlertDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Alert } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Run neetoUI Component Tests
DESCRIPTION: This command executes the test suite associated with neetoUI components. It's crucial to run tests to ensure code quality and prevent regressions. Tests will fail if there are console warnings or errors.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/README.md#_snippet_12

LANGUAGE: bash
CODE:
```
yarn test
```

----------------------------------------

TITLE: Importing Tab Component in NeetoUI
DESCRIPTION: This snippet demonstrates how to import the `Tab` component from the `@bigbinary/neetoui` library. The `Tab` component serves as a navigational element, allowing users to switch between different sections or views within a single interface.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TabStoriesDocs/TabDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Tab } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Define Neeto UI Font Weight Helpers in JavaScript
DESCRIPTION: This JavaScript array defines a collection of font weight helper objects for the Neeto UI library. Each object includes a variable name, a human-readable value, and a compiled value, facilitating consistent font weight application across components and documentation.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersFontWeight.stories.mdx#_snippet_1

LANGUAGE: javascript
CODE:
```
export const fontWeightHelpers = [
  {
    name: "$neeto-ui-font-thin",
    value: "thin",
    compiledValue: "thin"
  },
  {
    name: "$neeto-ui-font-extralight",
    value: "extralight",
    compiledValue: "extralight"
  },
  {
    name: "$neeto-ui-font-light",
    value: "light",
    compiledValue: "light"
  },
  {
    name: "$neeto-ui-font-normal",
    value: "normal",
    compiledValue: "normal"
  },
  {
    name: "$neeto-ui-font-medium",
    value: "medium",
    compiledValue: "medium"
  },
  {
    name: "$neeto-ui-font-semibold",
    value: "semibold",
    compiledValue: "semibold"
  },
  {
    name: "$neeto-ui-font-bold",
    value: "bold",
    compiledValue: "bold"
  },
  {
    name: "$neeto-ui-font-extrabold",
    value: "extrabold",
    compiledValue: "extrabold"
  },
  {
    name: "$neeto-ui-font-black",
    value: "black",
    compiledValue: "black"
  }
];
```

----------------------------------------

TITLE: Importing Toastr Component in neeto-ui
DESCRIPTION: This snippet demonstrates the standard way to import the `Toastr` component from the `@bigbinary/neetoui` library. The `Toastr` component provides a simple interface for displaying transient messages, leveraging `React-Toastify` internally.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Overlays/ToastrStoriesDocs/ToastrDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Toastr } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Importing Pane Component in JavaScript
DESCRIPTION: This JavaScript snippet shows how to import the `Pane` component from the `@bigbinary/neetoui` package. The `Pane` component is used to temporarily cover a portion of the main content, enabling context-specific interactions without navigating away from the current view.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Overlays/PaneStoriesDocs/PaneDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Pane } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Implementing an Accessible Modal Component in React
DESCRIPTION: This code snippet demonstrates how to create a Modal component using Neeto UI, incorporating essential WAI-ARIA attributes (`aria-labelledby` and `aria-describedby`) for accessibility. It showcases a complete modal structure with a header, body, and footer, including nested Typography and Button components.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/__wiki__/Accessibility.md#_snippet_0

LANGUAGE: jsx
CODE:
```
<Modal
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc"
  isOpen={showModalExtraSmall}
  onClose={() => setShowModalExtraSmall(false)}
  size="xs"
>
  <Modal.Header>
    <Typography style="h2" id="dialog1Title">
      They're creepy & they're kooky
    </Typography>
  </Modal.Header>
  <Modal.Body>
    <Typography style="body2" lineHeight="normal" id="dialog1Desc">
      Somewhere out in space live The Herculoids! Zok, the laser-ray dragon!
      Igoo, the giant rock ape! Tundro, the tremendous!
    </Typography>
  </Modal.Body>
  <Modal.Footer className="space-x-2">
    <Button
      icon={Check}
      size="large"
      label="Continue"
      onClick={() => setShowModalExtraSmall(false)}
    />
    <Button
      style="text"
      size="large"
      label="Cancel"
      onClick={() => setShowModalExtraSmall(false)}
    />
  </Modal.Footer>
</Modal>
```

----------------------------------------

TITLE: Importing the Spinner Component in React
DESCRIPTION: This code snippet illustrates the standard way to import the `Spinner` component from the `@bigbinary/neetoui` package. This import statement is typically placed at the top of a React component file where the `Spinner` is intended to be used, making it available for rendering within the UI.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/SpinnerStoriesDocs/SpinnerDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Spinner } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Storybook Meta Configuration for Text Transform Documentation
DESCRIPTION: Configures Storybook's documentation page for the text transform helpers, setting the title and hiding the canvas preview tab for a cleaner documentation view.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersTextTransform.stories.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Meta, Story } from "@storybook/addon-docs";

<Meta
  title="Foundation/Helpers/Text transform"
  parameters={{
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true }
    }
  }}
/>
```

----------------------------------------

TITLE: Importing ProgressBar Component in Neeto UI
DESCRIPTION: This snippet shows the standard way to import the `ProgressBar` component from the `@bigbinary/neetoui` package. The `ProgressBar` is a UI element designed to visually represent the completion status of a task or process, enhancing user feedback.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/ProgressBarDocs/ProgressBarDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { ProgressBar } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Internal Overlay Manager Manipulation Methods
DESCRIPTION: Illustrates methods primarily used internally by overlay components to manage the overlay stack. These include `addOverlay()` to push an overlay, `removeOverlay()` to pop one, `isTopOverlay()` to check an overlay's position, and `getFinalFocusInOverlay()` to find the last focusable element.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Managers/OverlayManager.stories.mdx#_snippet_1

LANGUAGE: js
CODE:
```
addOverlay(overlay); // adds an overlay to the stack
removeOverlay(overlay); // removes an overlay from the stack
isTopOverlay(overlay); // returns true if the overlay is the top most overlay in the stack
getFinalFocusInOverlay(); // returns the final focusable element in the top most overlay in the stack
```

----------------------------------------

TITLE: CSS Variables for neeto-ui Label Component
DESCRIPTION: Lists the CSS variables available for customizing the `Label` component in neeto-ui, including properties for font size, font weight, line height, color, and icon margin.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/LabelStoriesDocs/LabelCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
--neeto-ui-label-font-size: var(--neeto-ui-text-sm);
--neeto-ui-label-font-weight: var(--neeto-ui-font-medium);
--neeto-ui-label-line-height: 1;
--neeto-ui-label-color: rgb(var(--neeto-ui-black));

// Icon
--neeto-ui-label-icon-margin-left: 4px;
```

----------------------------------------

TITLE: Storybook MDX Page Metadata Configuration
DESCRIPTION: Configures the metadata for a Storybook MDX documentation page, setting the title, view mode, layout, and hiding the canvas preview tab.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Language.stories.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
<Meta
  title="Foundation/Language"
  parameters={{
    viewMode: "docs",
    layout: "fullscreen",
    previewTabs: {
      canvas: { hidden: true }
    }
  }}
/>
```

----------------------------------------

TITLE: Render neetoUI color palette table with dynamic theme
DESCRIPTION: This React component dynamically renders a table displaying the neetoUI color palette. It uses the `useDarkMode` hook to adapt to the current theme (dark/light) and iterates through `colorPaletteList` to show RGB codes, CSS variable names, and utility classes for text and background colors.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersColor.stories.mdx#_snippet_1

LANGUAGE: javascript
CODE:
```
() => {
    const isDarkMode = useDarkMode();
    const theme = isDarkMode ? "dark" : "light";
    return (
      <table className="story-demo-table">
        <thead>
        <tr>
          <td style={{ width: "75px" }}></td>
          <td>RGB code</td>
          <td>CSS Variable name</td>
          <td>Text color class</td>
          <td>Background color class</td>
        </tr>
        </thead>
        <tbody>
        {colorPaletteList(theme).map((color) => {
          return (
            <tr key={color.name}>
              <td>
                <div
                  className={`w-12 h-12 cursor-pointer rounded-full shadow-xl ${color.name.replace(
                    "--neeto-ui",
                    "neeto-ui-bg"
                  )}`}
                ></div>
              </td>
              <td>
                <code>{color.value}</code>
              </td>
              <td>
                <code>{`${color.name}`}</code>
              </td>
              <td>
                <div className="flex justify-between">
                  <code>{`${color.name.replace(
                    "--neeto-ui",
                    "neeto-ui-text"
                  )}`}</code>
                  <b
                    className={`ml-2 ${color.name.replace(
                      "--neeto-ui",
                      "neeto-ui-text"
                    )}`}
                  >
                    Aa
                  </b>
                </div>
              </td>
              <td className={`${color.name.replace("--neeto-ui", "neeto-ui-bg")}`}>
                <code>{`${color.name.replace("--neeto-ui", "neeto-ui-bg")}`}</code>
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    );
  }
```

----------------------------------------

TITLE: Render Neeto UI Border Radius Values in a Storybook Table
DESCRIPTION: This React JSX code dynamically generates an HTML table to display the `borderRadius` design tokens. It iterates through the `borderRadius` array, creating a row for each token that shows a visual preview, its corresponding CSS variable, and the utility class name. This helps in visualizing and understanding the different border-radius options.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersBorderRadius.stories.mdx#_snippet_3

LANGUAGE: javascript
CODE:
```
<table className="story-demo-table">
  <thead>
    <tr>
      <td>Preview</td>
      <td>CSS Variable</td>
      <td>Class</td>
    </tr>
  </thead>
  <tbody>
    {borderRadius.map((radius) => {
      return (
        <tr key={radius.name}>
          <td className="neeto-ui-bg-gray-800">
            <div className="p-6">
              <div
                className={`w-20 h-20 flex items-center justify-center neeto-ui-bg-white neeto-ui-text-black ${radius.name.replace(
                  "$neeto-ui",
                  "neeto-ui"
                )}`}
              >
                {radius.compiledValue}
              </div>
            </div>
          </td>
          <td>
            <code>{`${radius.name.replace("$neeto-ui", "--neeto-ui")}`}</code>
          </td>
          <td>
            <div className="flex justify-between">
              <code>{`${radius.name.replace("$neeto-ui", "neeto-ui")}`}</code>
            </div>
          </td>
        </tr>
      );
    })}
  </tbody>
</table>
```

----------------------------------------

TITLE: Importing Checkbox Component in React
DESCRIPTION: This snippet demonstrates the standard way to import the `Checkbox` component from the `@bigbinary/neetoui` library into a JavaScript/React application. The `Checkbox` component itself allows users to select multiple items from a list or mark a single item as selected with a simple click, providing essential UI functionality for forms and selections.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/CheckboxStoriesDocs/CheckboxDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Checkbox } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: CSS Variables for neeto-ui Input Component Styling
DESCRIPTION: Lists all available CSS variables for comprehensive customization of the neeto-ui `Input` component, covering wrapper, label, input, textarea, placeholder, focus, hover, prefix/suffix, and help/error text styles. These variables enable fine-grained control over the component's appearance.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/InputStoriesDocs/InputCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
// Wrapper
--neeto-ui-input-wrapper-flex-grow: 1;

// Label Wrapper
--neeto-ui-input-label-wrapper-gap: 8px;

// Label
--neeto-ui-input-label-overflow-wrap: break-word;
--neeto-ui-input-label-margin: 8px;

// Max Length
--neeto-ui-input-max-length-font-size: var(--neeto-ui-text-sm);
--neeto-ui-input-max-length-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-input-max-length-line-height: 1;

// Input
--neeto-ui-input-padding-x: 0px;
--neeto-ui-input-padding-y: 0px;
--neeto-ui-input-min-height: 0px;
--neeto-ui-input-font-size: var(--neeto-ui-text-sm);
--neeto-ui-input-border-width: 1px;
--neeto-ui-input-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-input-border-radius: var(--neeto-ui-rounded);
--neeto-ui-input-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-input-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-input-line-height: 1.2;

// Textarea
--neeto-ui-textarea-padding-x: 0px;
--neeto-ui-textarea-padding-y: 0px;
--neeto-ui-textarea-line-height: 1.5;
--neeto-ui-textarea-max-height: 224px;

// Placeholder
--neeto-ui-input-placeholder-color: rgb(var(--neeto-ui-gray-400));

// Focus
--neeto-ui-input-focus-outline-color: transparent;

// Hover
--neeto-ui-input-hover-border-color: rgb(var(--neeto-ui-gray-700));

// Focus Within
--neeto-ui-input-focus-within-border-color: rgb(var(--neeto-ui-primary-500));
--neeto-ui-input-focus-within-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-primary-500), 15%);

// Prefix & Suffix
--neeto-ui-input-prefix-suffix-font-size: var(--neeto-ui-text-sm);
--neeto-ui-input-prefix-suffix-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-input-prefix-suffix-bg-color: transparent;
--neeto-ui-input-prefix-suffix-line-height: 1;
--neeto-ui-input-prefix-suffix-icon-size: 16px;
--neeto-ui-input-prefix-suffix-margin: 0px;
--neeto-ui-input-prefix-suffix-padding-x: 0px;
--neeto-ui-input-prefix-suffix-border-width: 0px;
--neeto-ui-input-prefix-suffix-border-color: transparent;

// Help Text
--neeto-ui-input-help-text-margin: 8px;
--neeto-ui-input-help-text-font-size: var(--neeto-ui-text-xs);
--neeto-ui-input-help-text-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-input-help-text-line-height: 1.1;

// Error Text
--neeto-ui-input-error-text-margin: 8px;
--neeto-ui-input-error-text-font-size: var(--neeto-ui-text-xs);
--neeto-ui-input-error-text-color: rgb(var(--neeto-ui-error-800));
--neeto-ui-input-error-text-line-height: 1.1;
```

----------------------------------------

TITLE: Importing Avatar Component in JavaScript
DESCRIPTION: Demonstrates how to import the Avatar component from the `@bigbinary/neetoui` library. The Avatar component is a graphical representation, typically an image or icon, used to depict a user or entity in a digital environment.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/AvatarStoriesDocs/AvatarDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Avatar } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Define neeto-ui Box Shadow Variables in JavaScript
DESCRIPTION: This JavaScript array (`boxShadows`) defines standard box shadow values for the neeto-ui design system. Each entry specifies a name (for CSS variable mapping), its raw CSS value, and a compiled value. These definitions ensure consistent shadow application across UI components.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersBoxShadows.stories.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
export const boxShadows = [
  {
    "name": "$neeto-ui-shadow-xs",
    "value": "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
    "compiledValue": "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px"
  },
  {
    "name": "$neeto-ui-shadow-sm",
    "value": "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
    "compiledValue": "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px"
  },
  {
    "name": "$neeto-ui-shadow-md",
    "value": "rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px",
    "compiledValue": "rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px"
  },
  {
    "name": "$neeto-ui-shadow-lg",
    "value": "rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px",
    "compiledValue": "rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px"
  }
];
```

----------------------------------------

TITLE: Importing neetoUI Form Component
DESCRIPTION: Demonstrates how to import the `Form` component from the `@bigbinary/neetoui/formik` package. This component serves as an abstraction layer for `Formik` and `Form` components from the `formik` library, offering enhanced features like automatic scrolling to error fields. When using this component, ensure input `name` props follow dot notation (e.g., `name="firstName"` or `name="addJob.name"`) for the `ScrollToErrorField` component to function correctly; bracket notation (e.g., `name="addJob[name]"`) is not parsed by the error scrolling mechanism.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Formik/FormStories.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Form } from "@bigbinary/neetoui/formik";
```

----------------------------------------

TITLE: neeto-ui Popover Component CSS Variables Reference
DESCRIPTION: This snippet lists the core CSS variables used by the neeto-ui Popover component, enabling comprehensive customization of its appearance. It includes variables for border, padding, and theme-specific styling.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Overlays/PopoverStoriesDocs/PopoverCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
--neeto-ui-popover-border-width: 1px;
--neeto-ui-popover-border-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-popover-padding-x: 1rem;
--neeto-ui-popover-padding-y: 1rem;

// Light theme
--neeto-ui-popover-light-theme-border-color: rgb(var(--neeto-ui-gray-400));
```

----------------------------------------

TITLE: Integrate Custom Sorting and Pagination with neeto-ui Table
DESCRIPTION: This JSX snippet illustrates how to pass a custom `onChange` handler to the `neeto-ui` Table component. The `onChange` function receives `pagination`, `filters`, and `sorter` objects, allowing for custom logic to manage table state, such as updating the URL or fetching new data.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TableStoriesDocs/TableSortingDocs.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
<Table
  rowData={TABLE_DATA}
  columnData={columns}
  onChange={(pagination, filters, sorter) =>
    handleTableChange(pagination, filters, sorter)
  }
/>
```

----------------------------------------

TITLE: JavaScript Data for Neeto UI Text Transform Utilities
DESCRIPTION: Defines a JavaScript array `textTransform` containing objects. Each object describes a specific text transformation utility, including its internal name, CSS `value`, and `compiledValue` for display purposes. This data drives the dynamic generation of the documentation table.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersTextTransform.stories.mdx#_snippet_2

LANGUAGE: JavaScript
CODE:
```
export const textTransform = [
  {
    name: "$neeto-ui-text-transform-none",
    value: "none",
    compiledValue: "none"
  },
  {
    name: "$neeto-ui-text-transform-capitalize",
    value: "capitalize",
    compiledValue: "capitalize"
  },
  {
    name: "$neeto-ui-text-transform-uppercase",
    value: "uppercase",
    compiledValue: "uppercase"
  },
  {
    name: "$neeto-ui-text-transform-lowercase",
    value: "lowercase",
    compiledValue: "lowercase"
  },
  {
    name: "$neeto-ui-text-transform-fullwidth",
    value: "fullwidth",
    compiledValue: "fullwidth"
  },
  {
    name: "$neeto-ui-text-transform-inherit",
    value: "inherit",
    compiledValue: "inherit"
  },
  {
    name: "$neeto-ui-text-transform-initial",
    value: "initial",
    compiledValue: "initial"
  },
  {
    name: "$neeto-ui-text-transform-revert",
    value: "revert",
    compiledValue: "revert"
  },
  {
    name: "$neeto-ui-text-transform-unset",
    value: "unset",
    compiledValue: "unset"
  }
];
```

----------------------------------------

TITLE: Importing Radio Component in neeto-ui
DESCRIPTION: Demonstrates how to import the `Radio` component from the `@bigbinary/neetoui` library. The `Radio` component enables users to select a single option from a group of mutually exclusive choices, ensuring only one selection is active at a time.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/RadioStoriesDocs/RadioDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Radio } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: Integrating NeetoUI Translations with i18next
DESCRIPTION: Shows how to manually merge NeetoUI's translation resources with a host application's `i18next` setup. This method is useful when the application already uses `i18next` and `react-i18next`, allowing the integration of NeetoUI's translations without needing the `TranslationProvider` component.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Internationalization/TranslationProvider.stories.mdx#_snippet_2

LANGUAGE: jsx
CODE:
```
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { mergeDeepRight } from "ramda";
import { resources as NeetoUIResources } from "@bigbinary/neetoui/translations";

const HOST_RESOURCES = {
  en: {
    translation: {
      welcome: "Welcome to My App",
    },
  },
};

const resources = mergeDeepRight(NeetoUIResources, HOST_RESOURCES);

// Initialize i18next
i18n.use(initReactI18next).init({ resources });
```

----------------------------------------

TITLE: React Component for Displaying Neeto-UI Font Size Table
DESCRIPTION: This React JSX component renders an HTML table that dynamically displays the `fontSizeHelpers` data. It iterates through each helper, presenting a visual preview of the font size, its corresponding CSS variable name, and the utility class. This component is used within Storybook to document and demonstrate the available font sizes.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersFontSize.stories.mdx#_snippet_2

LANGUAGE: jsx
CODE:
```
<table className="table-auto">
  <thead>
    <tr>
      <td className="border p-2">Preview</td>
      <td className="border p-2">CSS Variable</td>
      <td className="border p-2">Class</td>
    </tr>
  </thead>
  <tbody>
    {fontSizeHelpers.map((helper) => {
      return (
        <tr key={helper.name}>
          <td className="neeto-ui-bg-gray-800 p-2">
            <div className="p-6">
              <div
                className={`w-46 h-18 flex items-center justify-center p-3 rounded-sm neeto-ui-bg-white neeto-ui-text-black ${helper.name.replace(
                  "$neeto-ui",
                  "neeto-ui"
                )}`}
              >
                {helper.compiledValue}
              </div>
            </div>
          </td>
          <td className="border p-2">
            <code>{`${helper.name.replace("$neeto-ui", "--neeto-ui")}`}</code>
          </td>
          <td className="border p-2">
            <div className="flex justify-between">
              <code>{`${helper.name.replace("$neeto-ui", "neeto-ui")}`}</code>
            </div>
          </td>
        </tr>
      );
    })}
  </tbody>
</table>
```

----------------------------------------

TITLE: Storybook MDX Page Styling
DESCRIPTION: Defines inline CSS styles for the Storybook MDX documentation page, adjusting table backgrounds, layout of 'do/don't' sections, and content width.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Language.stories.mdx#_snippet_2

LANGUAGE: css
CODE:
```
.story-demo-table tr{
    background: transparent !important;
  }
  .demo-do-dont-wrap{
    display: flex;
    gap: 16px;
    margin: 24px 0;
  }
  .sbdocs-wrapper{
    padding: 0 !important;
  }
  .sbdocs-content{
    max-width: 100% !important;
  }
  .table-of-content-list{

  }
  .table-of-content-list a{
    color: #000 !important;
    font-size: 15px !important;
  }
  .table-of-content-list a:hover,
  .table-of-content-list a:focus{
    text-decoration: underline;
  }
  .neeto-language-page-wrapper{
    margin-left:auto !important;
    margin-right:auto !important;
  }
```

----------------------------------------

TITLE: Include ToastContainer component for React Toastify
DESCRIPTION: To enable toast notifications provided by `react-toastify` (a dependency used by neetoUI), the `<ToastContainer />` component must be included in your application's main component tree. This typically involves placing it in your root `App` component or a layout component.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/README.md#_snippet_3

LANGUAGE: JSX
CODE:
```
import React from "react";

import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer />
      // Other children
    </>
  );
};
```

----------------------------------------

TITLE: Default CSS Variables for neeto-ui Tooltip Component
DESCRIPTION: This snippet lists the comprehensive set of CSS variables provided by neeto-ui for customizing the Tooltip component. It includes variables for general styling (e.g., max-width, font-size, colors, padding), arrow styling, and specific variables for the light theme appearance.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Overlays/TooltipStoriesDocs/TooltipCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
--neeto-ui-tooltip-max-width: calc(100vw - 10px);
--neeto-ui-tooltip-font-size: var(--neeto-ui-text-xs);
--neeto-ui-tooltip-bg-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-tooltip-color: rgb(var(--neeto-ui-white));
--neeto-ui-tooltip-border-radius: var(--neeto-ui-rounded);
--neeto-ui-tooltip-line-height: 1.4;
--neeto-ui-tooltip-word-wrap: break-word;
--neeto-ui-tooltip-padding-x: 8px;
--neeto-ui-tooltip-padding-y: 4px;
--neeto-ui-tooltip-z-index: 1;

// Arrow
--neeto-ui-tooltip-arrow-color: rgb(var(--neeto-ui-gray-800));

// Light theme
--neeto-ui-tooltip-light-theme-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-tooltip-light-theme-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-tooltip-light-theme-box-shadow: var(--neeto-ui-shadow-sm);
--neeto-ui-tooltip-light-theme-backdrop-bg-color: rgb(var(--neeto-ui-white));

// Light theme arrow
--neeto-ui-tooltip-light-theme-arrow-color: rgb(var(--neeto-ui-white));
--neeto-ui-tooltip-light-theme-arrow-border-color: rgb(var(--neeto-ui-white));
```

----------------------------------------

TITLE: Destructuring NeetoUI Dropdown Subcomponents for Direct Access
DESCRIPTION: Illustrates the use of JavaScript destructuring assignment to conveniently extract and directly reference the `Menu`, `MenuItem`, and `Divider` subcomponents from the `Dropdown` component. This simplifies subsequent code by allowing direct use of subcomponent names without the `Dropdown.` prefix.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/DropdownStoriesDocs/DropdownDocs.mdx#_snippet_2

LANGUAGE: JavaScript
CODE:
```
const { Menu, MenuItem, Divider } = Dropdown;
```

----------------------------------------

TITLE: Comprehensive CSS Variables for neeto-ui DateInput Component
DESCRIPTION: This snippet lists the comprehensive set of CSS variables available for styling the `DateInput` component in neeto-ui. These variables control aspects such as font sizes, colors, borders, padding, and active/hover/focus states for the input, cells, footer, and date panel, allowing for deep visual customization.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/DateInputStoriesDocs/DateInputCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
// Date Input
--neeto-ui-date-input-font-size: var(--neeto-ui-text-sm);
--neeto-ui-date-input-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-date-input-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-date-input-border-width: 1px;
--neeto-ui-date-input-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-date-input-border-radius: var(--neeto-ui-rounded);
--neeto-ui-date-input-line-height: 1.2;
--neeto-ui-date-input-padding-x: 0px;
--neeto-ui-date-input-padding-y: 0px;
--neeto-ui-date-input-box-shadow: 0px;
--neeto-ui-date-input-active-bar-bg-color: rgb(var(--neeto-ui-primary-500));

// Hover
--neeto-ui-date-input-hover-border-color: rgb(var(--neeto-ui-gray-800));

// Focus
--neeto-ui-date-input-focus-outline-color: transparent;
--neeto-ui-date-input-focus-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-primary-500), 15%);
--neeto-ui-date-input-focus-border-color: rgb(var(--neeto-ui-primary-500));

// Prefix & Suffix
--neeto-ui-date-input-prefix-suffix-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-date-input-prefix-suffix-size: 16px;
--neeto-ui-date-input-focus-prefix-suffix-color: rgb(var(--neeto-ui-gray-700));

// Cell
--neeto-ui-date-input-cell-font-size: var(--neeto-ui-text-sm);
--neeto-ui-date-input-cell-height: 32px;
--neeto-ui-date-input-cell-border-radius: var(--neeto-ui-rounded-sm);
--neeto-ui-date-input-cell-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-date-input-cell-hover-bg-color: rgb(var(--neeto-ui-gray-200));
--neeto-ui-date-input-cell-border-width: 1px;
--neeto-ui-date-input-cell-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-date-input-today-cell-border-width: 1px;
--neeto-ui-date-input-today-cell-border-color: rgb(var(--neeto-ui-primary-500));
--neeto-ui-date-input-selected-cell-color: rgb(var(--neeto-ui-white));
--neeto-ui-date-input-selected-cell-bg-color: rgb(var(--neeto-ui-primary-500));
--neeto-ui-date-input-cell-range-bg-color: rgb(var(--neeto-ui-gray-200));
--neeto-ui-date-input-cell-range-hover-bg-color: rgb(var(--neeto-ui-gray-400));

// Footer
--neeto-ui-date-input-footer-bg-color: rgb(var(--neeto-ui-gray-100));
--neeto-ui-date-input-footer-btn-padding-x: 8px;
--neeto-ui-date-input-footer-btn-padding-y: 5px;
--neeto-ui-date-input-footer-btn-gap: 4px;
--neeto-ui-date-input-footer-btn-font-size: var(--neeto-ui-text-xs);
--neeto-ui-date-input-footer-btn-font-weight: var(--neeto-ui-font-medium);
--neeto-ui-date-input-footer-btn-line-height: 16px;
--neeto-ui-date-input-footer-btn-border-radius: var(--neeto-ui-rounded);
--neeto-ui-date-input-footer-today-now-btn-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-date-input-footer-today-now-btn-hover-color: rgb(
  var(--neeto-ui-gray-800)
);
--neeto-ui-date-input-footer-today-now-btn-hover-bg-color: rgb(
  var(--neeto-ui-gray-200)
);
--neeto-ui-date-input-footer-ok-btn-color: rgb(var(--neeto-ui-white));
--neeto-ui-date-input-footer-ok-btn-bg-color: rgb(var(--neeto-ui-primary-500));
--neeto-ui-date-input-footer-ok-btn-border-color: rgb(
  var(--neeto-ui-primary-500)
);
--neeto-ui-date-input-footer-ok-btn-hover-color: rgb(var(--neeto-ui-white));
--neeto-ui-date-input-footer-ok-btn-hover-bg-color: rgb(
  var(--neeto-ui-primary-600)
);
--neeto-ui-date-input-footer-ok-btn-disabled-opacity: 0.5;

// Date Panel
--neeto-ui-date-panel-width: 320px;
--neeto-ui-date-panel-content-width: 272px;
--neeto-ui-date-panel-content-header-color: rgb(var(--neeto-ui-gray-600));
--neeto-ui-date-panel-content-header-font-size: var(--neeto-ui-text-xs);

// Date Panel Dropdown
--neeto-ui-date-panel-dropdown-padding-y: 2px;

// Date Panel Container
--neeto-ui-date-panel-container-border-width: 1px;
--neeto-ui-date-panel-container-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-date-panel-container-box-shadow: var(--neeto-ui-shadow-lg);
--neeto-ui-date-panel-container-border-radius: var(--neeto-ui-rounded-xl);

// Date Panel Header
--neeto-ui-date-panel-header-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-date-panel-header-min-height: 68px;
--neeto-ui-date-panel-header-padding-top: 12px;
--neeto-ui-date-panel-header-padding-bottom: 0px;
--neeto-ui-date-panel-header-padding-x: 24px;
--neeto-ui-date-panel-header-border-bottom-width: 0px;
--neeto-ui-date-panel-header-nav-btn-font-size: var(--neeto-ui-text-base);
--neeto-ui-date-panel-header-nav-btn-font-weight: var(--neeto-ui-font-semibold);
--neeto-ui-date-panel-header-nav-btn-padding-right: 24px;
--neeto-ui-date-panel-header-btn-color: rgb(var(--neeto-ui-gray-800));
```

----------------------------------------

TITLE: Available CSS Variables for neeto-ui NoData Component
DESCRIPTION: This snippet lists the CSS variables provided by `neeto-ui` for customizing the `NoData` component. These variables control various aspects such as margins for description, help text, image dimensions, and action block spacing.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/NoDataStoriesDocs/NoDataCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
// Description
--neeto-ui-no-data-description-margin-top: 0.5rem;

// Help Text
--neeto-ui-no-data-help-text-margin-top: 0.5rem;

// Image
--neeto-ui-no-data-image-margin-bottom: 1.5rem;
--neeto-ui-no-data-image-max-width: 11.5rem;
--neeto-ui-no-data-image-height: auto;

// Action Block
--neeto-ui-no-data-action-block-margin-top: 1.5rem;
--neeto-ui-no-data-action-block-gap: 0.5rem;
```

----------------------------------------

TITLE: Comprehensive CSS Variables for neeto-ui DateInput Component
DESCRIPTION: This snippet lists the extensive set of CSS variables provided by neeto-ui for customizing the `DateInput` component. Variables are categorized for clarity, covering aspects like time panel layout, input field appearance, hover/focus states, and prefix/suffix styling, enabling detailed visual adjustments.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TimePickerStoriesDocs/TimePickerCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
// Time Panel
--neeto-ui-time-panel-header-padding-top: 16px;
--neeto-ui-time-panel-header-padding-bottom: 8px;
--neeto-ui-time-panel-header-padding-x: 16px;
--neeto-ui-time-panel-header-column-font-size: var(--neeto-ui-text-xs);
--neeto-ui-time-panel-header-column-line-height: 16px;
--neeto-ui-time-panel-header-column-color: rgb(var(--neeto-ui-gray-600));
--neeto-ui-time-panel-header-column-gap: 12px;
--neeto-ui-time-panel-body-gap: 12px;
--neeto-ui-time-panel-body-padding-x: 16px;
--neeto-ui-time-panel-column-width: 62px;
--neeto-ui-time-panel-column-border-left-color: rgb(var(--neeto-ui-gray-200));
--neeto-ui-time-panel-cell-padding-x: 0px;
--neeto-ui-time-panel-cell-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-time-panel-now-btn-margin-bottom: 22px;

// Time Input
--neeto-ui-time-input-font-size: var(--neeto-ui-text-sm);
--neeto-ui-time-input-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-time-input-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-time-input-border-width: 1px;
--neeto-ui-time-input-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-time-input-border-radius: var(--neeto-ui-rounded);
--neeto-ui-time-input-line-height: 1.2;
--neeto-ui-time-input-padding-x: 0px;
--neeto-ui-time-input-padding-y: 0px;
--neeto-ui-time-input-box-shadow: 0px;

// Hover
--neeto-ui-time-input-hover-border-color: rgb(var(--neeto-ui-gray-800));

// Focus
--neeto-ui-time-input-focus-outline-color: transparent;
--neeto-ui-time-input-focus-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-primary-500), 15%);
--neeto-ui-time-input-focus-border-color: rgb(var(--neeto-ui-primary-500));

// Prefix & Suffix
--neeto-ui-time-input-prefix-suffix-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-time-input-prefix-suffix-size: 16px;
--neeto-ui-time-input-focus-prefix-suffix-color: rgb(var(--neeto-ui-gray-700));
```

----------------------------------------

TITLE: Forwarding Refs to Custom Components in neeto-ui Tooltip
DESCRIPTION: When a custom React component is used as a child of the `neetoui` `Tooltip` component, it's crucial to forward the ref from the `Tooltip` to the actual DOM node rendered by the custom component. This ensures that the `Tooltip` can correctly reference and position itself relative to its child. The `forwardRef` higher-order component from React is used for this purpose.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Overlays/TooltipStoriesDocs/TooltipDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import React, { forwardRef } from 'react';
import { Tooltip } from '@bigbinary/neetoui';

const ThisWontWork = () => {
  return <button>Reference</button>;
}

const ThisWillWork = forwardRef((props, ref) => {
  return <button ref={ref}>Reference</button>;
});

function App() {
  return (
    <Tooltip content="Tooltip">
      <ThisWillWork />
    </Tooltip>
  );
}
```

----------------------------------------

TITLE: CSS Variables for neeto-ui Callout Component
DESCRIPTION: Defines the full set of CSS variables available for customizing the appearance and layout of the `neeto-ui` Callout component. These variables control properties such as padding, font styles, colors, borders, and icon dimensions.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/CalloutStoriesDocs/CalloutCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
--neeto-ui-callout-padding-x: 12px;
--neeto-ui-callout-padding-y: 9px;
--neeto-ui-callout-font-size: var(--neeto-ui-text-sm);
--neeto-ui-callout-font-weight: var(--neeto-ui-font-medium);
--neeto-ui-callout-line-height: 16px;
--neeto-ui-callout-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-callout-bg-color: transparent;
--neeto-ui-callout-border-width: 1px;
--neeto-ui-callout-border-color: transparent;
--neeto-ui-callout-border-radius: var(--neeto-ui-rounded-md);
--neeto-ui-callout-gap: 12px;
--neeto-ui-callout-icon-size: 20px;
--neeto-ui-callout-icon-color: rgb(var(--neeto-ui-gray-800));
```

----------------------------------------

TITLE: CSS Variables for neeto-ui Pagination Component
DESCRIPTION: This snippet lists the comprehensive set of CSS variables available for customizing the `Pagination` component in neeto-ui. It includes variables for dimensions, padding, margins, typography, colors, and specific states like hover, focus-visible, and active, allowing granular control over the component's appearance.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/PaginationStoriesDocs/PaginationCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
--neeto-ui-pagination-item-padding-x: 4px;
--neeto-ui-pagination-item-padding-y: 4px;
--neeto-ui-pagination-item-width: 28px;
--neeto-ui-pagination-item-height: 28px;
--neeto-ui-pagination-item-margin-x: 4px;
--neeto-ui-pagination-item-margin-y: 0px;
--neeto-ui-pagination-item-font-size: var(--neeto-ui-text-sm);
--neeto-ui-pagination-item-font-weight: var(--neeto-ui-font-medium);
--neeto-ui-pagination-item-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-pagination-item-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-pagination-item-line-height: 1;
--neeto-ui-pagination-item-border-width: 1px;
--neeto-ui-pagination-item-border-color: transparent;
--neeto-ui-pagination-item-border-radius: var(--neeto-ui-rounded);

// Hover
--neeto-ui-pagination-item-hover-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-pagination-item-hover-bg-color: rgb(var(--neeto-ui-gray-200));

// Focus Visible
--neeto-ui-pagination-item-focus-visible-outline: 3px solid rgba(var(--neeto-ui-primary-500), 50%);
--neeto-ui-pagination-item-focus-visible-outline-offset: 1px;
--neeto-ui-pagination-item-focus-visible-box-shadow: none;

// Active
--neeto-ui-pagination-item-active-border-color: rgb(
  var(--neeto-ui-primary-500)
);
--neeto-ui-pagination-item-active-bg-color: rgb(var(--neeto-ui-primary-500));
--neeto-ui-pagination-item-active-color: rgb(var(--neeto-ui-white));
```

----------------------------------------

TITLE: Define neeto-ui Avatar Component CSS Variables
DESCRIPTION: This snippet lists the comprehensive set of CSS variables available for customizing the `neeto-ui` Avatar component. It covers styling options for the container, the avatar image itself, and the status indicator, allowing fine-grained control over dimensions, border-radius, and colors.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/AvatarStoriesDocs/AvatarCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
// Container
--neeto-ui-avatar-container-border-radius: var(--neeto-ui-rounded);
--neeto-ui-avatar-container-width: 24px;
--neeto-ui-avatar-container-height: 24px;

// Avatar
--neeto-ui-avatar-width: 1.5rem;
--neeto-ui-avatar-height: 1.5rem;
--neeto-ui-avatar-border-radius: var(--neeto-ui-rounded-full);

// Status
--neeto-ui-avatar-status-width: 0.4rem;
--neeto-ui-avatar-status-height: 0.4rem;
--neeto-ui-avatar-status-bg-color: var(--neeto-ui-white);
--neeto-ui-avatar-status-border-width: 0.5px;
--neeto-ui-avatar-status-border-color: rgb(var(--neeto-ui-white));
--neeto-ui-avatar-status-border-radius: var(--neeto-ui-rounded-full);
--neeto-ui-avatar-status-transform: translateX(-40%);
```

----------------------------------------

TITLE: JSX Component for Rendering Text Transform Documentation Table
DESCRIPTION: A React/JSX component that dynamically generates an HTML table. It iterates over the `textTransform` array to display each text transformation utility, including a visual preview, its corresponding CSS variable, and the utility class name, facilitating easy reference for developers.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersTextTransform.stories.mdx#_snippet_3

LANGUAGE: JSX
CODE:
```
<table className="table-auto">
  <thead>
    <tr>
      <td className="border p-2">Preview</td>
      <td className="border p-2">CSS Variable</td>
      <td className="border p-2">Class</td>
    </tr>
  </thead>
  <tbody>
    {textTransform.map((transform) => {
      return (
        <tr key={transform.name}>
          <td className="neeto-ui-bg-gray-800 p-2">
            <div className="p-6">
              <div
                className={`w-36 h-12 flex items-center justify-center rounded-sm neeto-ui-text-black neeto-ui-bg-white ${transform.name.replace(
                  "$neeto-ui",
                  "neeto-ui"
                )}`}
              >
                {transform.compiledValue}
              </div>
            </div>
          </td>
          <td className="border p-2">
            <code>{`${transform.name.replace("$neeto-ui", "--neeto-ui")}`}</code>
          </td>
          <td className="border p-2">
            <div className="flex justify-between">
              <code>{`${transform.name.replace("$neeto-ui", "neeto-ui")}`}</code>
            </div>
          </td>
        </tr>
      );
    })}
  </tbody>
</table>
```

----------------------------------------

TITLE: Define Neeto UI Border Radius Design Tokens
DESCRIPTION: This JavaScript array defines the standard border-radius values used across the Neeto UI design system. Each object specifies a token's name, its raw CSS value, and its compiled value, providing a central source of truth for UI rounding.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersBorderRadius.stories.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
export const borderRadius = [
  {
    "name": "$neeto-ui-rounded-none",
    "value": "0",
    "compiledValue": "0"
  },
  {
    "name": "$neeto-ui-rounded-sm",
    "value": "3px",
    "compiledValue": "3px"
  },
  {
    "name": "$neeto-ui-rounded",
    "value": "5px",
    "compiledValue": "5px"
  },
  {
    "name": "$neeto-ui-rounded-md",
    "value": "6px",
    "compiledValue": "6px"
  },
  {
    "name": "$neeto-ui-rounded-lg",
    "value": "8px",
    "compiledValue": "8px"
  },
  {
    "name": "$neeto-ui-rounded-xl",
    "value": "12px",
    "compiledValue": "12px"
  },
  {
    "name": "$neeto-ui-rounded-full",
    "value": "999px",
    "compiledValue": "999px"
  }
];
```

----------------------------------------

TITLE: Importing the Switch Component in neeto-ui
DESCRIPTION: The `Switch` component from `@bigbinary/neetoui` allows users to alternate between two states, typically on and off, with a single action. It differs from `Checkbox` in that it immediately alters the state upon toggling, whereas `Checkbox` is typically employed for state marking, often requiring interaction with a submit operation.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/SwitchStoriesDocs/SwitchDocs.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { Switch } from "@bigbinary/neetoui";
```

----------------------------------------

TITLE: CSS Variables for neeto-ui Select Component Styling
DESCRIPTION: This snippet provides a complete list of CSS variables used by the `Select` component in neeto-ui. These variables allow for granular control over the component's padding, borders, colors, font sizes, and specific states like placeholder, focus, hover, and error. It also includes variables for customizing indicators, menu options, and multi-value tags.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/SelectStoriesDocs/SelectCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
// Select
--neeto-ui-select-padding-x: 0px;
--neeto-ui-select-padding-y: 0px;
--neeto-ui-select-min-height: 0px;
--neeto-ui-select-font-size: var(--neeto-ui-text-sm);
--neeto-ui-select-border-width: 1px;
--neeto-ui-select-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-select-border-radius: var(--neeto-ui-rounded);
--neeto-ui-select-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-select-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-select-line-height: 1.2;

// Placeholder
--neeto-ui-select-placeholder-color: rgb(var(--neeto-ui-gray-400));

// Focus
--neeto-ui-select-focus-outline-color: transparent;
--neeto-ui-select-focus-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-primary-500), 15%);
--neeto-ui-select-focus-border-color: rgb(var(--neeto-ui-primary-500));

// Hover
--neeto-ui-select-hover-border-color: rgb(var(--neeto-ui-gray-700));

// Error
--neeto-ui-select-error-border-color: rgb(var(--neeto-ui-error-500));
--neeto-ui-select-error-box-shadow: 0 0 0 3px rgb(var(--neeto-ui-error-100));

// Indicators
--neeto-ui-select-indicators-padding: 0px;
--neeto-ui-select-indicators-gap: 8px;
--neeto-ui-select-indicators-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-select-indicators-hover-color: rgb(var(--neeto-ui-gray-700));

// Menu
--neeto-ui-select-menu-border-width: 1px;
--neeto-ui-select-menu-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-select-menu-border-radius: var(--neeto-ui-rounded);
--neeto-ui-select-menu-margin-top: 6px;
--neeto-ui-select-menu-margin-bottom: 16px;
--neeto-ui-select-menu-z-index: 20px;
--neeto-ui-select-menu-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-select-menu-box-shadow: var(--neeto-ui-shadow-lg);
--neeto-ui-select-menu-max-height: 480px;

// Menu Option
--neeto-ui-select-menu-option-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-select-menu-option-padding-x: 12px;
--neeto-ui-select-menu-option-padding-y: 8px;
--neeto-ui-select-menu-option-line-height: 1.1;
--neeto-ui-select-menu-option-min-height: 32px;

// Menu Option Focus
--neeto-ui-select-menu-option-focus-bg-color: rgb(var(--neeto-ui-gray-200));

// Menu Option Disabled
--neeto-ui-select-menu-option-disabled-color: rgb(var(--neeto-ui-gray-200));

// Menu Option Active
--neeto-ui-select-menu-option-acitve-bg-color: rgb(var(--neeto-ui-primary-500));
--neeto-ui-select-menu-option-acitve-color: rgb(var(--neeto-ui-white));

// Menu Fixed Option
--neeto-ui-select-menu-fixed-option-border-top-width: 1px;
--neeto-ui-select-menu-fixed-option-border-top-color: rgb(
  var(--neeto-ui-gray-100)
);
--neeto-ui-select-menu-fixed-option-padding-x: 0px;
--neeto-ui-select-menu-fixed-option-padding-y: 2px;
--neeto-ui-select-menu-fixed-option-link-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-select-menu-fixed-option-link-padding-x: 12px;
--neeto-ui-select-menu-fixed-option-link-padding-y: 8px;
--neeto-ui-select-menu-fixed-option-link-hover-color: rgb(
  var(--neeto-ui-gray-800)
);

// Multi Value
--neeto-ui-select-multi-value-bg-color: transparent;
--neeto-ui-select-multi-value-border-width: 1px;
--neeto-ui-select-multi-value-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-select-multi-value-border-radius: 100px;
--neeto-ui-select-multi-value-margin-right: 4px;
--neeto-ui-select-multi-value-margin-y: 4px;
--neeto-ui-select-multi-value-padding-x: 8px;
--neeto-ui-select-multi-value-padding-y: 0px;
--neeto-ui-select-multi-value-color: rgb(var(--neeto-ui-gray-800));

--neeto-ui-select-multi-value-label-margin-right: 6px;
--neeto-ui-select-multi-value-label-font-size: var(--neeto-ui-text-sm);
--neeto-ui-select-multi-value-label-line-height: 1;
--neeto-ui-select-multi-value-label-padding-x: 0px;
--neeto-ui-select-multi-value-label-padding-y: 2px;

--neeto-ui-select-multi-value-remove-hover-opacity: 0.7;
```

----------------------------------------

TITLE: Define UI Color Swatch Styles
DESCRIPTION: This CSS defines the styling for color swatch components used in a UI library's documentation. It sets up the container, individual swatch appearance, and text styling within the swatches, including dynamic background colors using CSS variables.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Color.stories.mdx#_snippet_1

LANGUAGE: css
CODE:
```
.demo-color-swatch-wrapper{
  background-color: rgb(var(--neeto-ui-body-bg));
}

.demo-color-swatch{
  width: 200px;
  height: 100px;
  border-radius: 5px;
  padding: 12px;
  font-size: 12px;
  display:flex;
  flex-direction:column;
  gap:12px;
}
.demo-color-swatch code{
  background:transparent;
  padding:0;
  outline:0;
  border:0;
  color: inherit;
  font-size: inherit;
}
.demo-color-swatch code:nth-child(2{
  font-weight:bold;
}
```

----------------------------------------

TITLE: Basic MultiEmailInput with Counter
DESCRIPTION: Demonstrates the simplest way to use the `MultiEmailInput` component with its built-in email counter enabled. By simply adding the `counter` prop, the component will display the current email count.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/MultiEmailInputStoriesDocs/MultiEmailInputCounterDocs.mdx#_snippet_0

LANGUAGE: jsx
CODE:
```
<MultiEmailInput counter />
```

----------------------------------------

TITLE: CSS Variables for neeto-ui Tag Component
DESCRIPTION: This snippet lists the core CSS variables available for customizing the `Tag` component in neeto-ui. These variables control various aspects like padding, font size, colors, border, and indicator styles, allowing for extensive visual adjustments.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TagStoriesDocs/TagCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
--neeto-ui-tag-padding-x: 8px;
--neeto-ui-tag-padding-y: 3px;
--neeto-ui-tag-font-size: var(--neeto-ui-text-xs);
--neeto-ui-tag-font-weight: var(--neeto-ui-font-normal);
--neeto-ui-tag-line-height: 12px;
--neeto-ui-tag-color: rgb(var(--neeto-ui-black));
--neeto-ui-tag-bg-color: transparent;
--neeto-ui-tag-border-width: 1px;
--neeto-ui-tag-border-color: transparent;
--neeto-ui-tag-border-radius: var(--neeto-ui-rounded-full);
--neeto-ui-tag-gap: 4px;
--neeto-ui-tag-icon-size: 12px;

// Indicator
--neeto-ui-tag-indicator-size: 8px;
--neeto-ui-tag-indicator-border-radius: var(--neeto-ui-rounded-full);

// Hover
--neeto-ui-tag-icon-hover-opacity: 0.8;
```

----------------------------------------

TITLE: Configure Storybook Meta for Border Radius Documentation
DESCRIPTION: This Storybook `Meta` component configures the display settings for the 'Border Radius' documentation page. It sets the title, hides the canvas tab, and ensures the documentation view mode is active, optimizing the presentation for design token documentation.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersBorderRadius.stories.mdx#_snippet_1

LANGUAGE: javascript
CODE:
```
<Meta
  title="Foundation/Helpers/Border Radius"
  parameters={{
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true }
    }
  }}
/>
```

----------------------------------------

TITLE: React Component to Display Border Color Palette
DESCRIPTION: A React functional component that renders an HTML table. It dynamically generates rows for each color in the `colorPaletteList`, displaying a color swatch, its RGB code, and the corresponding CSS utility class. It adapts to dark mode using `useDarkMode`.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersBorderColor.stories.mdx#_snippet_3

LANGUAGE: JavaScript
CODE:
```
() => {
    const isDarkMode = useDarkMode();
    const theme = isDarkMode ? "dark" : "light";
    return (
      <table className="story-demo-table">
        <thead>
        <tr>
          <td></td>
          <td>RGB code</td>
          <td>Class</td>
        </tr>
        </thead>
        <tbody>
        {colorPaletteList(theme).map((color) => {
          return (
            <tr key={color.name}>
              <td>
                <div
                  className={`w-12 h-12 border ${color.name.replace(
                    "--neeto-ui",
                    "neeto-ui-border"
                  )}`}
                ></div>
              </td>
              <td>
                <code>{color.value}</code>
              </td>
              <td>
                <div className="flex justify-between">
                  <code>{`${color.name.replace(
                    "--neeto-ui",
                    "neeto-ui-border"
                  )}`}</code>
                </div>
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>);
  }
```

----------------------------------------

TITLE: Default CSS Variables for neeto-ui Button Component
DESCRIPTION: This snippet lists the comprehensive set of CSS variables available for customizing the `neeto-ui` Button component. It includes variables for padding, font size, colors, borders, and specific states like disabled, hover, and focus, providing a full overview of the component's default styling hooks.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/ButtonStoriesDocs/ButtonCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
--neeto-ui-btn-padding-x: 8px;
--neeto-ui-btn-padding-y: 6px;
--neeto-ui-btn-font-size: var(--neeto-ui-text-sm);
--neeto-ui-btn-font-weight: var(--neeto-ui-font-medium);
--neeto-ui-btn-line-height: 16px;
--neeto-ui-btn-color: rgb(var(--neeto-ui-black));
--neeto-ui-btn-bg-color: transparent;
--neeto-ui-btn-border-width: 0;
--neeto-ui-btn-border-color: transparent;
--neeto-ui-btn-border-radius: var(--neeto-ui-rounded);
--neeto-ui-btn-gap: 4px;
--neeto-ui-btn-icon-size: 16px;
--neeto-ui-btn-box-shadow: none;
--neeto-ui-btn-outline: none;

// Disabled
--neeto-ui-btn-disabled-opacity: 0.5;

// Hover
--neeto-ui-btn-hover-color: rgb(var(--neeto-ui-black));
--neeto-ui-btn-hover-bg-color: transparent;
--neeto-ui-btn-hover-box-shadow: none;
--neeto-ui-btn-hover-opacity: 1;

// Focus
--neeto-ui-btn-focus-color: rgb(var(--neeto-ui-black));
--neeto-ui-btn-focus-box-shadow: none;
--neeto-ui-btn-focus-opacity: 1;

// Focus Visible
--neeto-ui-btn-focus-visible-color: rgb(var(--neeto-ui-black));
--neeto-ui-btn-focus-visible-outline: 3px solid rgba(var(--neeto-ui-primary-500), 50%);
--neeto-ui-btn-focus-visible-outline-offset: 1px;
--neeto-ui-btn-focus-visible-box-shadow: none;
```

----------------------------------------

TITLE: Storybook Meta Configuration for Border Color Page
DESCRIPTION: Configures the Storybook documentation page for 'Border Color', setting its title and parameters to hide the canvas preview tab, focusing solely on documentation.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersBorderColor.stories.mdx#_snippet_1

LANGUAGE: JavaScript
CODE:
```
<Meta
  title="Foundation/Helpers/Border Color"
  parameters={{
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true }
    }
  }}
/>
```

----------------------------------------

TITLE: Render Dynamic Table of Contents in React
DESCRIPTION: This JSX snippet demonstrates how to dynamically render a table of contents list in a React component. It iterates over a 'data' array, creating list items with anchor tags. Each item is expected to have an 'id' for the href and a 'title' for the display text, enabling navigation within the page.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Language.stories.mdx#_snippet_4

LANGUAGE: JSX
CODE:
```
{data.map(item => (
  <li key={item.id}>
    <a href={`#${item.id}`} className="text-sm text-black hover:text-blue-800">{item.title}</a>
  </li>
))}
```

----------------------------------------

TITLE: Available CSS Variables for neeto-ui ColorPicker
DESCRIPTION: This snippet lists all available CSS variables that can be used to customize various aspects of the neeto-ui ColorPicker component, including its popover, pointer, palette, and target elements. These variables allow for granular control over styling properties like dimensions, padding, borders, and colors.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/ColorPickerStoriesDocs/ColorPickerCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
// Popover
--neeto-ui-colorpicker-popover-width: 224px;
--neeto-ui-colorpicker-popover-padding: 12px;

// Pointer
--neeto-ui-colorpicker-pointer-width: 20px;
--neeto-ui-colorpicker-pointer-height: 20px;

// Palette Wrapper
--neeto-ui-colorpicker-palette-wrapper-margin-top: 12px;

// Palette Item
--neeto-ui-colorpicker-palette-item-width: 32px;
--neeto-ui-colorpicker-palette-item-height: 32px;
--neeto-ui-colorpicker-palette-item-border-width: 1px;
--neeto-ui-colorpicker-palette-item-border-color: transparent;
--neeto-ui-colorpicker-palette-item-border-radius: var(--neeto-ui-rounded-md);
--neeto-ui-colorpicker-palette-item-padding: 0;
--neeto-ui-colorpicker-palette-item-margin-left: 1.25px;

// Target Wrapper
--neeto-ui-colorpicker-target-wrapper-gap: 8px;

// Target
--neeto-ui-colorpicker-target-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-colorpicker-target-border-radius: var(--neeto-ui-rounded);
--neeto-ui-colorpicker-target-border-width: 1px;
--neeto-ui-colorpicker-target-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-colorpicker-target-height: 28px;
--neeto-ui-colorpicker-target-padding: 8px;
--neeto-ui-colorpicker-target-gap: 12px;

// Targer: Hover
--neeto-ui-colorpicker-target-hover-border-color: rgb(var(--neeto-ui-gray-700));

// Targer: Focus Visible
--neeto-ui-colorpicker-target-focus-visible-border-color: rgb(
  var(--neeto-ui-primary-500)
);
--neeto-ui-colorpicker-target-focus-visible-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-primary-500), 15%);
--neeto-ui-colorpicker-target-focus-visible-outline: none;

// Target - Color
--neeto-ui-colorpicker-target-color-block-border-radius: var(
  --neeto-ui-rounded
);
--neeto-ui-colorpicker-target-color-block-width: 20px;
--neeto-ui-colorpicker-target-color-block-height: 20px;

// Target - Hexcode
--neeto-ui-colorpicker-target-hexcode-font-size: var(--neeto-ui-text-sm);
--neeto-ui-colorpicker-target-hexcode-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-colorpicker-target-hexcode-font-weight: var(--neeto-ui-font-medium);
--neeto-ui-colorpicker-target-hexcode-min-width: 72px;
```

----------------------------------------

TITLE: Configure Table Columns for Sorting in neeto-ui
DESCRIPTION: This JavaScript snippet demonstrates how to define columns for a neeto-ui Table component, enabling sorting for a specific column by setting `sorter: true`. It also includes a placeholder for a custom sort function `handleTableChange` that would process the sorting logic.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TableStoriesDocs/TableSortingDocs.mdx#_snippet_0

LANGUAGE: js
CODE:
```
const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 75,
      sorter: true
    },
    // other columns
  ];

  // custom sort function
  const handleTableChange = (pagination, filters, sorter) => {
    // Logic for sorting
  };
```

----------------------------------------

TITLE: Available CSS Variables for neeto-ui Accordion Component
DESCRIPTION: This snippet lists all the CSS variables provided by neeto-ui for comprehensive customization of the Accordion component's various parts, including its outer wrapper, inner wrapper, individual items, dropdown content, and different interaction states like open, hover, and focus.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/AccordionStoriesDocs/AccordionCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
--neeto-ui-accordion-outer-wrapper-padding-x: 0px;
--neeto-ui-accordion-outer-wrapper-padding-y: 0px;
--neeto-ui-accordion-outer-wrapper-border-radius: 0px;
--neeto-ui-accordion-outer-wrapper-bg-color: transparent;

--neeto-ui-accordion-wrapper-border-width: 1px;
--neeto-ui-accordion-wrapper-border-color: rgb(var(--neeto-ui-gray-300));
--neeto-ui-accordion-wrapper-border-radius: 0px;

--neeto-ui-accordion-item-padding-x: 8px;
--neeto-ui-accordion-item-padding-y: 16px;
--neeto-ui-accordion-item-font-size: var(--neeto-ui-text-base);
--neeto-ui-accordion-item-font-weight: var(--neeto-ui-font-medium);
--neeto-ui-accordion-item-line-height: 16px;
--neeto-ui-accordion-item-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-accordion-item-bg-color: transparent;

--neeto-ui-accordion-drop-padding-x: 8px;
--neeto-ui-accordion-drop-padding-top: 4px;
--neeto-ui-accordion-drop-padding-bottom: 16px;
--neeto-ui-accordion-drop-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-accordion-drop-margin-bottom: 0px;

--neeto-ui-accordion-item-open-color: rgb(var(--neeto-ui-black));

--neeto-ui-accordion-item-hover-color: rgb(var(--neeto-ui-black));

--neeto-ui-accordion-item-focus-visible-color: rgb(var(--neeto-ui-black));
--neeto-ui-accordion-item-focus-visible-outline: 3px solid rgba(var(--neeto-ui-primary-500), 50%);
--neeto-ui-accordion-item-focus-visible-outline-offset: 1px;
--neeto-ui-accordion-item-focus-visible-box-shadow: none;
```

----------------------------------------

TITLE: Applying neetoUI CSS Variable for Border Radius
DESCRIPTION: This CSS snippet demonstrates how to apply a predefined neetoUI CSS variable, `--neeto-ui-rounded`, to an anchor tag's `border-radius` property. This illustrates the basic usage of neetoUI's theme variables for consistent styling across components.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Customize/CSSVariables.stories.mdx#_snippet_3

LANGUAGE: css
CODE:
```
a {
   border-radius: var(--neeto-ui-rounded);
}
```

----------------------------------------

TITLE: Define Line Height Helper Variables in JavaScript
DESCRIPTION: Exports a JavaScript array named `lineHeightHelpers`, which contains objects defining various line height utility variables. Each object includes the helper's name, its raw value, and its compiled value, serving as structured data for documentation and dynamic rendering.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersLineHeight.stories.mdx#_snippet_2

LANGUAGE: JavaScript
CODE:
```
export const lineHeightHelpers = [
  {
    name: "$neeto-ui-leading-none",
    value: "none",
    compiledValue: "none"
  },
  {
    name: "$neeto-ui-leading-tight",
    value: "tight",
    compiledValue: "tight"
  },
  {
    name: "$neeto-ui-leading-snug",
    value: "snug",
    compiledValue: "snug"
  },
  {
    name: "$neeto-ui-leading-normal",
    value: "normal",
    compiledValue: "normal"
  },
  {
    name: "$neeto-ui-leading-relaxed",
    value: "relaxed",
    compiledValue: "relaxed"
  },
  {
    name: "$neeto-ui-leading-loose",
    value: "loose",
    compiledValue: "loose"
  }
];
```

----------------------------------------

TITLE: CSS Variables for neeto-ui Tab Component Customization
DESCRIPTION: Defines the full set of CSS variables available for customizing the appearance and behavior of the `Tab` component in neeto-ui. This includes variables for general styling, as well as specific states like hover, focus, active, and focus-visible, allowing granular control over the component's visual properties.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TabStoriesDocs/TabCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
--neeto-ui-tab-wrapper-border-width: 2px;
--neeto-ui-tab-wrapper-border-color: rgb(var(--neeto-ui-gray-300));
--neeto-ui-tab-padding-x: 8px;
--neeto-ui-tab-padding-y: 12px;
--neeto-ui-tab-font-size: var(--neeto-ui-text-sm);
--neeto-ui-tab-font-weight: var(--neeto-ui-font-semibold);
--neeto-ui-tab-line-height: 1;
--neeto-ui-tab-color: rgb(var(--neeto-ui-gray-600));
--neeto-ui-tab-border-color: transparent;
--neeto-ui-tab-gap: 12px;
--neeto-ui-tab-icon-size: 16px;
--neeto-ui-tab-text-decoration: none;
--neeto-ui-tab-outline: none;

// Hover
--neeto-ui-tab-hover-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-tab-hover-text-decoration: none;
--neeto-ui-tab-hover-outline: none;

// Focus
--neeto-ui-tab-focus-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-tab-focus-text-decoration: none;
--neeto-ui-tab-focus-outline: none;

// Active
--neeto-ui-tab-active-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-tab-active-border-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-tab-active-text-decoration: none;
--neeto-ui-tab-active-outline: none;

// Focus Visible
--neeto-ui-tab-focus-visible-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-tab-focus-visible-outline: 3px solid rgba(var(--neeto-ui-primary-500), 50%);
--neeto-ui-tab-focus-visible-outline-offset: 1px;
--neeto-ui-tab-focus-visible-box-shadow: none;
```

----------------------------------------

TITLE: Custom CSS for Storybook Demo Table
DESCRIPTION: Applies specific CSS rules to the `.story-demo-table` to ensure its background is transparent, preventing interference with Storybook's default styling.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersBorderColor.stories.mdx#_snippet_2

LANGUAGE: CSS
CODE:
```
.story-demo-table tr{
      background: transparent !important;
  }
```

----------------------------------------

TITLE: Comprehensive CSS Variables for neeto-ui Switch Component
DESCRIPTION: This snippet provides a complete list of CSS variables used internally by the neeto-ui Switch component. These variables allow developers to customize various aspects such as dimensions, colors, borders, transformations, and focus states for the wrapper, switch item, switch itself, and its checked state.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/SwitchStoriesDocs/SwitchCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
// Wrapper
--neeto-ui-switch-wrapper-width: fit-content;

// Switch Item
--neeto-ui-switch-item-width: 44px;
--neeto-ui-switch-item-height: 24px;
--neeto-ui-switch-item-border-width: 2px;
--neeto-ui-switch-item-border-color: transparent;
--neeto-ui-switch-item-border-radius: 20px;
--neeto-ui-switch-item-bg-color: rgb(var(--neeto-ui-gray-300));
--neeto-ui-switch-item-opacity: 1;

// Switch
--neeto-ui-switch-width: 20px;
--neeto-ui-switch-height: 20px;
--neeto-ui-switch-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-switch-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-switch-transform: translateX(0);
--neeto-ui-switch-border-radius: 16px;
--neeto-ui-switch-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

// Checked
--neeto-ui-switch-item-checked-bg-color: rgb(var(--neeto-ui-success-500));
--neeto-ui-switch-checked-color: rgb(var(--neeto-ui-success-500));
--neeto-ui-switch-checked-transform: translateX(20px);

// Margin
--neeto-ui-switch-label-margin: 12px;

// Focus Within
--neeto-ui-switch-focus-within-box-shadow: 0 0 0 3px rgb(var(--neeto-ui-gray-200));

// Focus Visible
--neeto-ui-switch-focus-visible-outline: 3px solid rgba(var(--neeto-ui-primary-500), 50%);
--neeto-ui-switch-focus-visible-outline-offset: 1px;
--neeto-ui-switch-focus-visible-box-shadow: none;
```

----------------------------------------

TITLE: neeto-ui Pane Component CSS Variables Reference
DESCRIPTION: Comprehensive list of CSS variables used by the `Pane` component in neeto-ui v6. These variables allow for fine-grained control over its appearance, including dimensions, colors, z-index, padding, and shadows for different parts like the backdrop, wrapper, header, body, and footer.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Overlays/PaneStoriesDocs/PaneCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
--neeto-ui-pane-spacing: 24px;

// Backdrop
--neeto-ui-pane-backdrop-z-index: var(--neeto-ui-modal-z-index);
--neeto-ui-pane-backdrop-bg-color: #1b1f23dd;
--neeto-ui-pane-backdrop-backdrop-filter: blur(2px);

// Wrapper
--neeto-ui-pane-wrapper-width: auto;
--neeto-ui-pane-wrapper-max-width: 100%;
--neeto-ui-pane-wrapper-height: auto;
--neeto-ui-pane-wrapper-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-pane-wrapper-backdrop-filter: blur(2px);

// Close Button
--neeto-ui-pane-close-btn-top: var(--neeto-ui-pane-spacing);
--neeto-ui-pane-close-btn-right: var(--neeto-ui-pane-spacing);

// Header
--neeto-ui-pane-header-padding-y: var(--neeto-ui-pane-spacing);
--neeto-ui-pane-header-padding-right: 64px;
--neeto-ui-pane-header-padding-left: var(--neeto-ui-pane-spacing);

// Body
--neeto-ui-pane-body-padding-x: var(--neeto-ui-pane-spacing);
--neeto-ui-pane-body-padding-y: 0px;
--neeto-ui-pane-body-height: calc(100vh - var(--neeto-ui-pane-header-height));
--neeto-ui-pane-body-font-size: var(--neeto-ui-text-sm);

// Footer
--neeto-ui-pane-footer-padding: var(--neeto-ui-pane-spacing);
--neeto-ui-pane-footer-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-pane-footer-min-height: var(--neeto-ui-pane-footer-height);
--neeto-ui-pane-footer-box-shadow: var(--neeto-ui-shadow-m);
```

----------------------------------------

TITLE: Basic Usage of TranslationProvider in NeetoUI
DESCRIPTION: Demonstrates how to wrap a React application with NeetoUI's `TranslationProvider` component to enable internationalization support. By default, this setup uses English (en) as the language for NeetoUI components.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Internationalization/TranslationProvider.stories.mdx#_snippet_0

LANGUAGE: jsx
CODE:
```
import TranslationProvider from "@bigbinary/neetoui/TranslationProvider";

const App = () => (
  <TranslationProvider>
    <Main />
  </TranslationProvider>
);
```

----------------------------------------

TITLE: Define CSS Custom Properties for Date Input Styling
DESCRIPTION: This CSS snippet defines a set of custom properties (variables) that are integral to the visual styling of date input components in the `neeto-ui` design system. These variables allow for consistent theming and easy modification of elements like focus rings, border colors for 'today' and selected cells, and the background/border colors of action buttons within the date input's footer, often referencing other `neeto-ui` color variables.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/DateInputStoriesDocs/DateInputCSSCustomization.mdx#_snippet_2

LANGUAGE: css
CODE:
```
  --neeto-ui-date-input-focus-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-success-500), 15%);
  --neeto-ui-date-input-focus-border-color: rgb(var(--neeto-ui-success-500));
  --neeto-ui-date-input-today-cell-border-color: rgb(
    var(--neeto-ui-success-500)
  );
  --neeto-ui-date-input-selected-cell-bg-color: rgb(
    var(--neeto-ui-success-500)
  );
  --neeto-ui-date-input-footer-btn-border-radius: var(--neeto-ui-rounded-none);
  --neeto-ui-date-input-footer-ok-btn-bg-color: rgb(
    var(--neeto-ui-success-500)
  );
  --neeto-ui-date-input-footer-ok-btn-border-color: rgb(
    var(--neeto-ui-success-500)
  );
  --neeto-ui-date-input-footer-ok-btn-hover-bg-color: rgb(
    var(--neeto-ui-success-600)
  );
}
```

----------------------------------------

TITLE: Define neetoUI Root CSS Variables
DESCRIPTION: This CSS block defines a comprehensive set of root CSS variables for neetoUI, covering colors (black, white, gray, primary, error, success, warning, info), shadows, text sizes, font weights, line heights, text transformations, border radii, transitions, and z-index values. All variables are prefixed with `neeto-ui` to prevent naming conflicts.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Customize/CSSVariables.stories.mdx#_snippet_0

LANGUAGE: css
CODE:
```
:root {
  --neeto-ui-black: 0, 0, 0;
  --neeto-ui-white: 255, 255, 255;
  --neeto-ui-gray-800: 18, 18, 18;
  --neeto-ui-gray-700: 47, 57, 65;
  --neeto-ui-gray-600: 104, 115, 125;
  --neeto-ui-gray-500: 135, 146, 157;
  --neeto-ui-gray-400: 194, 200, 204;
  --neeto-ui-gray-300: 216, 220, 222;
  --neeto-ui-gray-200: 233, 235, 237;
  --neeto-ui-gray-100: 248, 249, 249;
  --neeto-ui-primary-800: 45, 54, 212;
  --neeto-ui-primary-600: 54, 66, 223;
  --neeto-ui-primary-500: 69, 88, 249;
  --neeto-ui-primary-100: 235, 236, 254;
  --neeto-ui-error-800: 187, 18, 26;
  --neeto-ui-error-600: 201, 37, 45;
  --neeto-ui-error-500: 215, 55, 63;
  --neeto-ui-error-100: 254, 236, 240;
  --neeto-ui-success-800: 16, 113, 84;
  --neeto-ui-success-600: 18, 128, 92;
  --neeto-ui-success-500: 38, 142, 108;
  --neeto-ui-success-100: 225, 243, 238;
  --neeto-ui-warning-800: 189, 100, 13;
  --neeto-ui-warning-600: 203, 111, 16;
  --neeto-ui-warning-500: 218, 123, 17;
  --neeto-ui-warning-100: 251, 242, 225;
  --neeto-ui-info-800: 9, 90, 186;
  --neeto-ui-info-600: 13, 102, 208;
  --neeto-ui-info-500: 20, 115, 230;
  --neeto-ui-info-100: 226, 242, 255;
  --neeto-ui-shadow-xs: 0px 1px 4px -1px rgba(28, 48, 74, 0.12);
  --neeto-ui-shadow-sm: 0px 3px 12px -1px rgba(28, 52, 84, 0.12), 0px 2px
      4px -1px rgba(28, 55, 90, 0.08);
  --neeto-ui-shadow-md: 0px 8px 24px -4px rgba(28, 50, 79, 0.12), 0px 2px
      6px -1px rgba(28, 55, 90, 0.08);
  --neeto-ui-shadow-lg: 0 8px 24px rgba(140, 149, 159, 0.2);
  --neeto-ui-text-h1: 32px;
  --neeto-ui-text-h2: 24px;
  --neeto-ui-text-h3: 20px;
  --neeto-ui-text-h4: 16px;
  --neeto-ui-text-h5: 14px;
  --neeto-ui-text-h6: 12px;
  --neeto-ui-text-body1: 16px;
  --neeto-ui-text-body2: 14px;
  --neeto-ui-text-body3: 12px;
  --neeto-ui-text-nano: 10px;
  --neeto-ui-text-xxs: 10px;
  --neeto-ui-text-xs: 12px;
  --neeto-ui-text-sm: 14px;
  --neeto-ui-text-base: 16px;
  --neeto-ui-text-lg: 18px;
  --neeto-ui-text-xl: 20px;
  --neeto-ui-text-2xl: 24px;
  --neeto-ui-text-3xl: 32px;
  --neeto-ui-text-4xl: 48px;
  --neeto-ui-font-thin: 100;
  --neeto-ui-font-extralight: 200;
  --neeto-ui-font-light: 300;
  --neeto-ui-font-normal: 400;
  --neeto-ui-font-medium: 500;
  --neeto-ui-font-semibold: 600;
  --neeto-ui-font-bold: 700;
  --neeto-ui-font-extrabold: 800;
  --neeto-ui-font-black: 900;
  --neeto-ui-leading-none: 1;
  --neeto-ui-leading-tight: 1.25;
  --neeto-ui-leading-snug: 1.375;
  --neeto-ui-leading-normal: 1.5;
  --neeto-ui-leading-relaxed: 1.625;
  --neeto-ui-leading-loose: 2;
  --neeto-ui-text-transform-none: none;
  --neeto-ui-text-transform-capitalize: capitalize;
  --neeto-ui-text-transform-uppercase: uppercase;
  --neeto-ui-text-transform-lowercase: lowercase;
  --neeto-ui-text-transform-full-width: full-width;
  --neeto-ui-text-transform-inherit: inherit;
  --neeto-ui-text-transform-initial: initial;
  --neeto-ui-text-transform-revert: revert;
  --neeto-ui-text-transform-unset: unset;
  --neeto-ui-rounded-none: 0;
  --neeto-ui-rounded-sm: 3px;
  --neeto-ui-rounded: 5px;
  --neeto-ui-rounded-md: 6px;
  --neeto-ui-rounded-lg: 8px;
  --neeto-ui-rounded-xl: 12px;
  --neeto-ui-rounded-full: 999px;
  --neeto-ui-transition: all 0.3s linear;
  --neeto-ui-modal-z-index: 99999;
  --neeto-ui-pane-header-height: 78px;
  --neeto-ui-pane-footer-height: 80px;
  --neeto-ui-main-header-height: 80px;
  --neeto-ui-main-header-with-breadcrumbs-height: 94px;
  --neeto-ui-sub-header-height: 37px;
  --neeto-ui-sub-header-bottom-margin: 20px;
  --neeto-ui-pagination-block-height: 88px;
  --neeto-ui-table-header-height: 40px;
  --neeto-ui-surface-bg: 255, 255, 255;
  --neeto-ui-pastel-color-1: 229, 231, 235;
  --neeto-ui-pastel-color-2: 254, 202, 202;
  --neeto-ui-pastel-color-3: 253, 230, 138;
  --neeto-ui-pastel-color-4: 167, 243, 208;
  --neeto-ui-pastel-color-5: 191, 219, 254;
  --neeto-ui-pastel-color-6: 199, 210, 254;
  --neeto-ui-pastel-color-7: 221, 214, 254;
  --neeto-ui-pastel-color-8: 251, 207, 232;
}
```

----------------------------------------

TITLE: Apply custom CSS styles for Storybook demo tables
DESCRIPTION: This CSS snippet defines styles for tables used in Storybook demos, ensuring a fixed layout and transparent backgrounds for rows. It targets `.story-demo-table` and its `tr` elements to override default styling.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersColor.stories.mdx#_snippet_0

LANGUAGE: css
CODE:
```
.story-demo-table {
    table-layout: fixed;
  }
  .story-demo-table tr {
    background: transparent !important;
  }
```

----------------------------------------

TITLE: Display neetoUI primary color roles and usage
DESCRIPTION: This React component generates a table showcasing the primary colors from the neetoUI palette. It filters colors using `getColorPaletteList` to display only those with defined `usage` properties, indicating their specific roles within the interface, and adapts to the current theme.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersColor.stories.mdx#_snippet_2

LANGUAGE: javascript
CODE:
```
() => {
    const isDarkMode = useDarkMode();
    const theme = isDarkMode ? "dark" : "light";
    return (
      <table className="story-demo-table">
        <thead>
        <tr>
          <td style={{ width: "75px" }}></td>
          <td>Color</td>
          <td>Usage</td>
        </tr>
        </thead>
        <tbody>
        {getColorPaletteList(["PRIMARY"], theme)
        .filter((color) => color.usage !== undefined)
        .map((color) => {
          return (
            <tr key={color.name}>
              <td>
                <div
                  className={`w-12 h-12 cursor-pointer rounded-full shadow-xl ${color.name.replace(
                    "--neeto-ui",
                    "neeto-ui-bg"
                  )}`}
                ></div>
              </td>
              <td>
                <code>{`${color.name}`}</code>
              </td>
              <td>
                {`${color.usage}`}
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    );
  }
```

----------------------------------------

TITLE: CSS Variables for neeto-ui Textarea Component Customization
DESCRIPTION: This snippet lists the comprehensive set of CSS variables available for customizing the `Textarea` component in neeto-ui v6. These variables control various aspects like wrapper, label, input, max length, placeholder, focus, hover, prefix/suffix, help text, and error text styles, allowing granular control over the component's appearance and behavior.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TextareaStoriesDocs/TextareaCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
// Wrapper
--neeto-ui-input-wrapper-flex-grow: 1;

// Label Wrapper
--neeto-ui-input-label-wrapper-gap: 8px;

// Label
--neeto-ui-input-label-overflow-wrap: break-word;
--neeto-ui-input-label-margin: 8px;

// Max Length
--neeto-ui-input-max-length-font-size: var(--neeto-ui-text-sm);
--neeto-ui-input-max-length-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-input-max-length-line-height: 1;

// Input
--neeto-ui-input-padding-x: 0px;
--neeto-ui-input-padding-y: 0px;
--neeto-ui-input-min-height: 0px;
--neeto-ui-input-font-size: var(--neeto-ui-text-sm);
--neeto-ui-input-border-width: 1px;
--neeto-ui-input-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-input-border-radius: var(--neeto-ui-rounded);
--neeto-ui-input-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-input-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-input-line-height: 1.2;

// Textarea
--neeto-ui-textarea-padding-x: 0px;
--neeto-ui-textarea-padding-y: 0px;
--neeto-ui-textarea-line-height: 1.5;
--neeto-ui-textarea-max-height: 224px;

// Placeholder
--neeto-ui-input-placeholder-color: rgb(var(--neeto-ui-gray-400));

// Focus
--neeto-ui-input-focus-outline-color: transparent;

// Hover
--neeto-ui-input-hover-border-color: rgb(var(--neeto-ui-gray-700));

// Focus Within
--neeto-ui-input-focus-within-border-color: rgb(var(--neeto-ui-primary-500));
--neeto-ui-input-focus-within-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-primary-500), 15%);

// Prefix & Suffix
--neeto-ui-input-prefix-suffix-font-size: var(--neeto-ui-text-sm);
--neeto-ui-input-prefix-suffix-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-input-prefix-suffix-bg-color: transparent;
--neeto-ui-input-prefix-suffix-line-height: 1;
--neeto-ui-input-prefix-suffix-icon-size: 16px;
--neeto-ui-input-prefix-suffix-margin: 0px;
--neeto-ui-input-prefix-suffix-padding-x: 0px;
--neeto-ui-input-prefix-suffix-border-width: 0px;
--neeto-ui-input-prefix-suffix-border-color: transparent;

// Help Text
--neeto-ui-input-help-text-margin: 8px;
--neeto-ui-input-help-text-font-size: var(--neeto-ui-text-xs);
--neeto-ui-input-help-text-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-input-help-text-line-height: 1.1;

// Error Text
--neeto-ui-input-error-text-margin: 8px;
--neeto-ui-input-error-text-font-size: var(--neeto-ui-text-xs);
--neeto-ui-input-error-text-color: rgb(var(--neeto-ui-error-800));
--neeto-ui-input-error-text-line-height: 1.1;
```

----------------------------------------

TITLE: Available CSS Variables for neeto-ui Modal Component
DESCRIPTION: This snippet lists all CSS variables that can be used to customize various aspects of the neeto-ui Modal component. It includes variables for general spacing, backdrop appearance, wrapper dimensions and styling, close button positioning, and padding for the header, body, and footer sections.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Overlays/ModalStoriesDocs/ModalCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
--neeto-ui-modal-spacing: 24px;

// Backdrop
--neeto-ui-modal-backdrop-z-index: var(--neeto-ui-modal-z-index);
--neeto-ui-modal-backdrop-bg-color: #1b1f23dd;
--neeto-ui-modal-backdrop-backdrop-filter: blur(2px);

// Wrapper
--neeto-ui-modal-wrapper-width: 50%;
--neeto-ui-modal-wrapper-max-width: 100%;
--neeto-ui-modal-wrapper-height: auto;
--neeto-ui-modal-wrapper-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-modal-wrapper-border-radius: var(--neeto-ui-rounded-xl);
--neeto-ui-modal-wrapper-backdrop-filter: blur(2px);

// Close Button
--neeto-ui-modal-close-btn-top: var(--neeto-ui-modal-spacing);
--neeto-ui-modal-close-btn-right: var(--neeto-ui-modal-spacing);

// Header
--neeto-ui-modal-header-padding-top: var(--neeto-ui-modal-spacing);
--neeto-ui-modal-header-padding-right: 64px;
--neeto-ui-modal-header-padding-bottom: 16px;
--neeto-ui-modal-header-padding-left: var(--neeto-ui-modal-spacing);

// Header Description
--neeto-ui-modal-header-description-margin-top: 8px;
--neeto-ui-modal-header-description-color: rgb(var(--neeto-ui-gray-700));

// Body
--neeto-ui-modal-body-padding-top: 0;
--neeto-ui-modal-body-padding-bottom: var(--neeto-ui-modal-spacing);
--neeto-ui-modal-body-padding-x: var(--neeto-ui-modal-spacing);
--neeto-ui-modal-body-font-size: --neeto-ui-text-sm;
--neeto-ui-modal-body-line-height: 1.5;

// Footer
--neeto-ui-modal-footer-padding-top: 0;
--neeto-ui-modal-footer-padding-bottom: var(--neeto-ui-modal-spacing);
--neeto-ui-modal-footer-padding-x: var(--neeto-ui-modal-spacing);
```

----------------------------------------

TITLE: Displaying Gray Color Palette in React
DESCRIPTION: This React component demonstrates how to dynamically render a table of gray color palette entries. It uses `useDarkMode` to adapt to the current theme and `getColorPaletteList` to fetch color data, displaying each color's name and usage.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersColor.stories.mdx#_snippet_3

LANGUAGE: jsx
CODE:
```
{
  () => {
    const isDarkMode = useDarkMode();
    const theme = isDarkMode ? "dark" : "light";
    return (
      <table className="story-demo-table">
        <thead>
        <tr>
          <td style={{ width: "75px" }}></td>
          <td>Color</td>
          <td>Usage</td>
        </tr>
        </thead>
        <tbody>
        {getColorPaletteList(["BASE", "GRAY"], theme)
        .filter((color) => color.usage !== undefined)
        .map((color) => {
          return (
            <tr key={color.name}>
              <td>
                <div
                  className={`w-12 h-12 cursor-pointer rounded-full shadow-xl ${color.name.replace(
                    "--neeto-ui",
                    "neeto-ui-bg"
                  )}`}
                ></div>
              </td>
              <td>
                <code>{`${color.name}`}</code>
              </td>
              <td>
                {`${color.usage}`}
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    );
  }
}
```

----------------------------------------

TITLE: Default CSS Variables for neeto-ui Tree Component
DESCRIPTION: This snippet lists the comprehensive set of CSS variables used internally by the `neeto-ui` Tree component. These variables control various aspects, including checkbox colors (default, hover, checked states), border styles, border-radius, drag icon opacity, and the color for highlighted search values. They serve as the foundation for component styling and can be overridden for custom themes.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TreeStoriesDocs/TreeCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
--neeto-ui-tree-checkbox-color: rgb(var(--neeto-ui-primary-500));
--neeto-ui-tree-checkbox-border-color: rgb(var(--neeto-ui-gray-300));
--neeto-ui-tree-checkbox-border-radius: var(--neeto-ui-rounded-sm);

// Hover
--neeto-ui-tree-checkbox-hover-border-color: rgb(var(--neeto-ui-gray-500));

// Checked
--neeto-ui-tree-checkbox-checked-border-color: rgb(var(--neeto-ui-primary-500));
--neeto-ui-tree-checkbox-checked-bg-color: rgb(var(--neeto-ui-primary-500));

// Drag Icon
--neeto-ui-tree-drag-icon-opacity: 0.4;

// Search Value
--neeto-ui-tree-search-value: #f50;
```

----------------------------------------

TITLE: neeto-ui TreeSelect Component CSS Variables Reference
DESCRIPTION: This snippet provides a comprehensive list of CSS variables available for customizing the neeto-ui TreeSelect component. These variables control aspects like borders, colors, backgrounds, and shadows for the main select, placeholder, hover, disabled, focus, dropdown, and tree elements, allowing for granular style adjustments.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TreeSelectStoriesDocs/TreeSelectCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
// Select
--neeto-ui-tree-select-border-radius: var(--neeto-ui-rounded);
--neeto-ui-tree-select-border-width: 1px;
--neeto-ui-tree-select-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-tree-select-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-tree-select-color: rgb(var(--neeto-ui-gray-800));

// Placeholder
--neeto-ui-tree-select-placeholder-color: rgb(var(--neeto-ui-gray-400));

// Hover
--neeto-ui-tree-select-hover-border-color: rgb(var(--neeto-ui-gray-700));

// Disabled
--neeto-ui-tree-select-disabled-bg-color: rgb(var(--neeto-ui-gray-100));

// Focus Within
--neeto-ui-tree-select-focus-within-border-color: rgb(
  var(--neeto-ui-primary-500)
);
--neeto-ui-tree-select-focus-within-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-primary-500), 15%);

// Dropdown
--neeto-ui-tree-select-dropdown-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-tree-select-dropdown-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-tree-select-dropdown-border-radius: var(--neeto-ui-rounded);
--neeto-ui-tree-select-dropdown-border-width: 1px;
--neeto-ui-tree-select-dropdown-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-tree-select-dropdown-box-shadow: var(--neeto-ui-shadow-lg);

// Tree
--neeto-ui-tree-select-dropdown-tree-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-tree-select-dropdown-tree-color: rgb(var(--neeto-ui-gray-800));

// Tree Hover
--neeto-ui-tree-select-dropdown-tree-hover-bg-color: rgb(
  var(--neeto-ui-gray-200)
);

// Tree Selected
--neeto-ui-tree-select-dropdown-tree-selected-color: rgb(var(--neeto-ui-white));

// Tree Switcher
--neeto-ui-tree-select-dropdown-tree-switcher-width: 32px;

// Tree Switcher Icon
--neeto-ui-tree-select-dropdown-tree-switcher-icon-margin-top: 4px;
--neeto-ui-tree-select-dropdown-tree-switcher-icon-width: 32px;
--neeto-ui-tree-select-dropdown-tree-switcher-icon-svg-size: 16px;

// Tree List Holder
--neeto-ui-tree-select-dropdown-tree-list-holder-padding-right: 24px;
```

----------------------------------------

TITLE: Neeto UI Container and Table Component Layout
DESCRIPTION: This JSX snippet illustrates a basic component hierarchy in Neeto UI, showing `Header`, `Subheader`, and `Table` components nested within a `Container`. The `Container` component is designed to manage its children's overflow, specifically enabling vertical scrolling for the `Table` if its content exceeds the container's visible area.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TableStoriesDocs/LayoutTableDocs.mdx#_snippet_0

LANGUAGE: jsx
CODE:
```
<Container>
  <Header />
  <Subheader />
  <Table />
</Container>
```

----------------------------------------

TITLE: Define neeto-ui MultiEmailInput CSS Customization Variables
DESCRIPTION: This snippet lists the CSS variables available for customizing the `MultiEmailInput` component in `neeto-ui` v6+. These variables control various aspects like label wrapper gap, counter color, line height, margin, and prefix/suffix icon sizing, allowing for granular control over the component's appearance.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/MultiEmailInputStoriesDocs/MultiEmailInputCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
// Label Wrapper
--neeto-ui-multi-email-input-label-wrapper-gap: 8px;
--neeto-ui-multi-email-input-counter-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-multi-email-input-counter-line-height: 1;
--neeto-ui-multi-email-input-counter-margin-bottom: 8px;

// Prefx & Suffix
--neeto-ui-multi-email-input-prefix-suffix-icon-size: 16px;
--neeto-ui-multi-email-input-prefix-margin-left: 12px;
```

----------------------------------------

TITLE: Setting Language with TranslationProvider in NeetoUI
DESCRIPTION: Illustrates how to specify a different language, such as Spanish (es), for NeetoUI components by passing the `language` prop to the `TranslationProvider` component. This allows dynamic language switching within the application.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Internationalization/TranslationProvider.stories.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
import TranslationProvider from "@bigbinary/neetoui/TranslationProvider";

const App = () => (
  <TranslationProvider language="es">
    <Main />
  </TranslationProvider>
);
```

----------------------------------------

TITLE: Apply Custom CSS for Storybook Demo Table Background
DESCRIPTION: This CSS snippet applies specific styling to the `.story-demo-table` rows within a Storybook environment. It ensures that the table rows have a transparent background, overriding any default Storybook styles for better visual presentation of the design tokens.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersBorderRadius.stories.mdx#_snippet_2

LANGUAGE: css
CODE:
```
.story-demo-table tr{
      background: transparent !important;
  }
```

----------------------------------------

TITLE: Default CSS Variables for neeto-ui Kbd Component
DESCRIPTION: This snippet lists the default CSS variables that control the styling of the `Kbd` component in neeto-ui. These variables define properties such as font size, color, background, border radius, and dimensions, providing a baseline for customization.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/KbdStoriesDocs/KbdCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
--neeto-ui-kbd-font-size: var(--neeto-ui-text-sm);
--neeto-ui-kbd-font-weight: var(--neeto-ui-font-semibold);
--neeto-ui-kbd-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-kbd-bg-color: rgb(var(--neeto-ui-gray-200));
--neeto-ui-kbd-border-radius: var(--neeto-ui-rounded);
--neeto-ui-kbd-min-width: 24px;
--neeto-ui-kbd-height: 24px;
--neeto-ui-kbd-padding: 4px;
```

----------------------------------------

TITLE: Custom CSS for Storybook Documentation Tables
DESCRIPTION: Provides custom CSS rules specifically for styling tables within the Storybook documentation, ensuring a transparent background for table rows to maintain visual consistency.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersTextTransform.stories.mdx#_snippet_1

LANGUAGE: CSS
CODE:
```
.story-demo-table tr{
      background: transparent !important;
  }
```

----------------------------------------

TITLE: neeto-ui Radio Component CSS Variables Reference
DESCRIPTION: A comprehensive list of CSS variables available for customizing the neeto-ui Radio component. These variables control aspects like size, color, border, opacity for different states (disabled, hover, focus, checked, error), and spacing.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/RadioStoriesDocs/RadioCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
--neeto-ui-radio-size: 16px;
--neeto-ui-radio-color: rgb(var(--neeto-ui-primary-500));
--neeto-ui-radio-border-width: 2px;
--neeto-ui-radio-border-color: rgb(var(--neeto-ui-gray-400));

// Disabled
--neeto-ui-radio-disabled-opacity: 0.5;

// Hover
--neeto-ui-radio-hover-border-color: rgb(var(--neeto-ui-gray-500));

// Focus
--neeto-ui-radio-focus-outline: transparent;
--neeto-ui-radio-focus-outline-offset: 0px;

// Focus Visible
--neeto-ui-radio-focus-visible-outline: 3px solid rgba(var(--neeto-ui-primary-500), 50%);
--neeto-ui-radio-focus-visible-outline-offset: 1px;
--neeto-ui-radio-focus-visible-box-shadow: none;

// Checked
--neeto-ui-radio-checked-border-color: rgb(var(--neeto-ui-primary-500));

// Error
--neeto-ui-radio-error-border-color: rgb(var(--neeto-ui-error-500));
--neeto-ui-radio-error-color: rgb(var(--neeto-ui-error-500));
--neeto-ui-radio-error-font-size: var(--neeto-ui-text-xs);

// Margin
--neeto-ui-radio-wrapper-label-margin: 12px;
--neeto-ui-radio-wrapper-error-margin: 4px;
--neeto-ui-radio-label-margin: 8px;
--neeto-ui-radio-margin: 16px;

// Label
--neeto-ui-radio-label-line-height: 1.2;
```

----------------------------------------

TITLE: Default CSS Variables for neeto-ui Modal Component
DESCRIPTION: Lists the default CSS variables available for customizing the neeto-ui modal component. These variables control various aspects such as spacing, backdrop, wrapper dimensions, background colors, border-radius, and padding for header, body, and footer sections. They serve as the base for component styling.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Overlays/AlertStoriesDocs/AlertCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
--neeto-ui-modal-spacing: 24px;

// Backdrop
--neeto-ui-modal-backdrop-z-index: var(--neeto-ui-modal-z-index);
--neeto-ui-modal-backdrop-bg-color: #1b1f23dd;
--neeto-ui-modal-backdrop-backdrop-filter: blur(2px);

// Wrapper
--neeto-ui-modal-wrapper-width: 50%;
--neeto-ui-modal-wrapper-max-width: 100%;
--neeto-ui-modal-wrapper-height: auto;
--neeto-ui-modal-wrapper-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-modal-wrapper-border-radius: var(--neeto-ui-rounded-xl);
--neeto-ui-modal-wrapper-backdrop-filter: blur(2px);

// Close Button
--neeto-ui-modal-close-btn-top: var(--neeto-ui-modal-spacing);
--neeto-ui-modal-close-btn-right: var(--neeto-ui-modal-spacing);

// Header
--neeto-ui-modal-header-padding-top: var(--neeto-ui-modal-spacing);
--neeto-ui-modal-header-padding-right: 64px;
--neeto-ui-modal-header-padding-bottom: 16px;
--neeto-ui-modal-header-padding-left: var(--neeto-ui-modal-spacing);

// Header Description
--neeto-ui-modal-header-description-margin-top: 8px;
--neeto-ui-modal-header-description-color: rgb(var(--neeto-ui-gray-700));

// Body
--neeto-ui-modal-body-padding-top: 0;
--neeto-ui-modal-body-padding-bottom: var(--neeto-ui-modal-spacing);
--neeto-ui-modal-body-padding-x: var(--neeto-ui-modal-spacing);
--neeto-ui-modal-body-font-size: --neeto-ui-text-sm;
--neeto-ui-modal-body-line-height: 1.5;

// Footer
--neeto-ui-modal-footer-padding-top: 0;
--neeto-ui-modal-footer-padding-bottom: var(--neeto-ui-modal-spacing);
--neeto-ui-modal-footer-padding-x: var(--neeto-ui-modal-spacing);
```

----------------------------------------

TITLE: Configure More Actions in Table Column Definitions
DESCRIPTION: This snippet illustrates how to define custom 'more actions' for a table column by adding a `moreActions` array to its definition. Each action object within this array must specify a `type` for identification and a `label` for display.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TableStoriesDocs/MoreActionsOnHeaderDocs.mdx#_snippet_0

LANGUAGE: js
CODE:
```
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 75,
    moreActions: [{ type: "action1", label: "Action 1" }],
  },
  // other columns
];
```

----------------------------------------

TITLE: neeto-ui Checkbox Component CSS Variables Reference
DESCRIPTION: Comprehensive list of CSS variables available for customizing the neeto-ui `Checkbox` component, detailing properties for size, color, borders, and states like disabled, hover, focus, and checked. These variables allow fine-grained control over the component's styling.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/CheckboxStoriesDocs/CheckboxCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
--neeto-ui-checkbox-size: 16px;
--neeto-ui-checkbox-color: rgb(var(--neeto-ui-primary-500));
--neeto-ui-checkbox-border-width: 2px;
--neeto-ui-checkbox-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-checkbox-border-radius: var(--neeto-ui-rounded-sm);

// Disabled
--neeto-ui-checkbox-disabled-opacity: 0.5;

// Hover
--neeto-ui-checkbox-hover-border-color: rgb(var(--neeto-ui-gray-500));

// Focus
--neeto-ui-checkbox-focus-outline: transparent;
--neeto-ui-checkbox-focus-outline-offset: 0px;

// Focus Visible
--neeto-ui-checkbox-focus-visible-outline: 3px solid rgba(var(--neeto-ui-primary-500), 50%);
--neeto-ui-checkbox-focus-visible-outline-offset: 1px;
--neeto-ui-checkbox-focus-visible-box-shadow: none;

// Checked
--neeto-ui-checkbox-checked-border-color: rgb(var(--neeto-ui-primary-500));

// Margin
--neeto-ui-checkbox-label-margin: 8px;

// Label
--neeto-ui-checkbox-label-line-height: 1.2;
```

----------------------------------------

TITLE: neeto-ui Table Component Default CSS Variables
DESCRIPTION: This snippet lists the core CSS variables used internally by the neeto-ui Table component. These variables define various styling aspects such as font sizes, text transformations, border widths, and resize handle properties, providing hooks for external customization.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TableStoriesDocs/TableCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
--neeto-ui-table-header-font-size: var(--neeto-ui-text-xs);
--neeto-ui-table-header-text-transform: uppercase;
--neeto-ui-table-header-border-bottom-width: 2px;
--neeto-ui-table-resize-handle-width: 10px;
--neeto-ui-table-resize-handle-hover-bg-color: rgb(var(--neeto-ui-gray-300));
```

----------------------------------------

TITLE: Default CSS Variables for neeto-ui ProgressBar
DESCRIPTION: These are the standard CSS variables used internally by the `neeto-ui` ProgressBar component to define its default background, progress color, and value text color. They are based on neeto-ui's design tokens.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/ProgressBarDocs/ProgressBarCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
--progress-bar-background: rgb(var(--neeto-ui-gray-200));
--progress-bar-color: rgb(var(--neeto-ui-primary-600));
--progress-value-text-color: rgb(var(--neeto-ui-primary-100));
```

----------------------------------------

TITLE: Apply Global CSS for Storybook Demo Table
DESCRIPTION: Defines a global CSS rule to ensure that table rows within elements having the 'story-demo-table' class have a transparent background, overriding any default styling that might interfere with the visual presentation.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersLineHeight.stories.mdx#_snippet_1

LANGUAGE: CSS
CODE:
```
.story-demo-table tr{
      background: transparent !important;
  }
```

----------------------------------------

TITLE: Displaying Semantic Color Palette in React
DESCRIPTION: This React component showcases the rendering of a table for semantic colors (SUCCESS, ERROR, WARNING, INFO). It leverages `useDarkMode` for theme adaptation and `getColorPaletteList` to retrieve and display color details, including their names and intended usage.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersColor.stories.mdx#_snippet_4

LANGUAGE: jsx
CODE:
```
{
  () => {
    const isDarkMode = useDarkMode();
    const theme = isDarkMode ? "dark" : "light";
    return (
      <table className="story-demo-table">
        <thead>
        <tr>
          <td style={{ width: "75px" }}></td>
          <td>Color</td>
          <td>Usage</td>
        </tr>
        </thead>
        <tbody>
        {getColorPaletteList(["SUCCESS", "ERROR", "WARNING", "INFO"], theme)
        .filter((color) => color.usage !== undefined)
        .map((color) => {
          return (
            <tr key={color.name}>
              <td>
                <div
                  className={`w-12 h-12 cursor-pointer rounded-full shadow-xl ${color.name.replace(
                    "--neeto-ui",
                    "neeto-ui-bg"
                  )}`}
                ></div>
              </td>
              <td>
                <code>{`${color.name}`}</code>
              </td>
              <td>
                {`${color.usage}`}
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    );
  }
}
```

----------------------------------------

TITLE: Customizing MultiEmailInput Counter Label for i18n
DESCRIPTION: Shows how to provide a custom label for the email counter, which is particularly useful for internationalization (i18n) or when a specific display name is required instead of the default. The `counter` prop accepts an object with a `label` property.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/MultiEmailInputStoriesDocs/MultiEmailInputCounterDocs.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
<MultiEmailInput counter={{ label: "E-mail" }} />
```

----------------------------------------

TITLE: Default CSS Variables for neeto-ui Spinner Component
DESCRIPTION: These are the default CSS variables utilized by the `Spinner` component in neeto-ui, defining its size, color, and border width. These variables provide the base styling for the component.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/SpinnerStoriesDocs/SpinnerCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
--neeto-ui-spinner-size: 20px;
--neeto-ui-spinner-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-spinner-border-width: 3px;
```

----------------------------------------

TITLE: Available CSS Variables for neeto-ui Dropdown Component
DESCRIPTION: This code block lists all the CSS variables provided by neeto-ui for customizing the Dropdown component. These variables control various aspects such as general dropdown spacing, border styles, box shadows, popup dimensions, menu padding, individual item styling (padding, font, color, background), and specific states like active, disabled, hover, and focus, along with divider styles.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/DropdownStoriesDocs/DropdownCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
--neeto-ui-dropdown-margin-x: 0px;
--neeto-ui-dropdown-margin-y: 6px;
--neeto-ui-dropdown-padding-x: 0px;
--neeto-ui-dropdown-padding-y: 0px;
--neeto-ui-dropdown-border-width: 1px;
--neeto-ui-dropdown-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-dropdown-border-radius: var(--neeto-ui-rounded);
--neeto-ui-dropdown-box-shadow: var(--neeto-ui-shadow-lg);

// Popup
--neeto-ui-dropdown-popup-width: auto;
--neeto-ui-dropdown-popup-min-width: 168px;
--neeto-ui-dropdown-popup-max-height: 480px;
--neeto-ui-dropdown-popup-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-dropdown-popup-border-radius: var(--neeto-ui-rounded);
--neeto-ui-dropdown-popup-z-index: 99999;

// Popup Menu
--neeto-ui-dropdown-popup-menu-padding-x: 0px;
--neeto-ui-dropdown-popup-menu-padding-y: 4px;

// Item
--neeto-ui-dropdown-item-padding-y: 6px;
--neeto-ui-dropdown-item-padding-x: 12px;
--neeto-ui-dropdown-item-font-size: var(--neeto-ui-text-sm);
--neeto-ui-dropdown-item-font-weight: var(--neeto-ui-font-normal);
--neeto-ui-dropdown-item-line-height: 1.143;
--neeto-ui-dropdown-item-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-dropdown-item-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-dropdown-item-white-space: nowrap;
--neeto-ui-dropdown-item-min-height: 32px;
--neeto-ui-dropdown-item-gap: 8px;
--neeto-ui-dropdown-item-border-radius: 0px;

// Item - Active
--neeto-ui-dropdown-item-active-bg-color: rgb(var(--neeto-ui-primary-500));
--neeto-ui-dropdown-item-active-color: rgb(var(--neeto-ui-white));

// Item - Disabled
--neeto-ui-dropdown-item-disabled-opacity: 0.5;

// Item - Hover
--neeto-ui-dropdown-item-hover-bg-color: rgb(var(--neeto-ui-gray-200));

// Item - Focus
--neeto-ui-dropdown-item-focus-bg-color: rgb(var(--neeto-ui-gray-200));

// Divider
--neeto-ui-dropdown-divider-height: 1px;
--neeto-ui-dropdown-divider-bg-color: rgb(var(--neeto-ui-gray-200));
--neeto-ui-dropdown-divider-margin: 4px;
```

----------------------------------------

TITLE: Available CSS Variables for neeto-ui Stepper Component
DESCRIPTION: This snippet lists all the CSS variables provided by neeto-ui v6 for customizing the `Stepper` component. These variables allow fine-grained control over the component's layout, colors, sizes, and states, including wrapper, item, separator, stage, and label properties.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/StepperStoriesDocs/StepperCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
// Wrapper
--neeto-ui-stepper-wrapper-gap: 8px;

// Item
--neeto-ui-stepper-item-gap: 8px;
--neeto-ui-stepper-item-padding: 8px;

// Item Separator
--neeto-ui-stepper-item-separator-width: 48px;
--neeto-ui-stepper-item-separator-border-top: 2px dashed rgb(var(--neeto-ui-gray-400));
--neeto-ui-stepper-item-separator-margin-left: 8px;

// Item - Done Separator
--neeto-ui-stepper-item-done-separator-border-top-style: solid;
--neeto-ui-stepper-item-done-separator-border-color: rgb(
  var(--neeto-ui-primary-500)
);

// Stage
--neeto-ui-stepper-stage-width: 28px;
--neeto-ui-stepper-stage-height: 28px;
--neeto-ui-stepper-stage-bg-color: rgb(var(--neeto-ui-gray-200));
--neeto-ui-stepper-stage-border-radius: var(--neeto-ui-rounded-full);

// Stage Done
--neeto-ui-stepper-item-done-stage-bg-color: rgb(var(--neeto-ui-success-800));

// Stage Active
--neeto-ui-stepper-item-active-stage-bg-color: rgb(var(--neeto-ui-primary-500));
--neeto-ui-stepper-item-active-stage-inner-width: 18px;
--neeto-ui-stepper-item-active-stage-inner-height: 18px;
--neeto-ui-stepper-item-active-stage-inner-border-width: 2px;
--neeto-ui-stepper-item-active-stage-inner-border-color: rgb(
  var(--neeto-ui-white)
);
--neeto-ui-stepper-item-active-stage-inner-border-radius: var(
  --neeto-ui-rounded-full
);

// Label
--neeto-ui-stepper-label-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-stepper-label-font-size: var(--neeto-ui-text-sm);
--neeto-ui-stepper-label-line-height: 16px;

// Label Hover
--neeto-ui-stepper-label-hover-color: rgb(var(--neeto-ui-black));

// Label Active
--neeto-ui-stepper-label-active-color: rgb(var(--neeto-ui-black));
--neeto-ui-stepper-label-active-font-weight: var(--neeto-ui-font-semibold);
```

----------------------------------------

TITLE: Apply Transparent Background to Storybook Demo Table Rows
DESCRIPTION: This CSS snippet overrides the default background for table rows within Storybook's preview mode, ensuring they remain transparent. This is useful for custom styling within documentation to prevent background conflicts.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Foundation/Helpers/HelpersFontWeight.stories.mdx#_snippet_0

LANGUAGE: css
CODE:
```
.story-demo-table tr{
      background: transparent !important;
  }
```

----------------------------------------

TITLE: Destructuring ActionDropdown Subcomponents
DESCRIPTION: This snippet shows how to destructure the subcomponents (Menu, MenuItem, Divider) from the ActionDropdown component. This simplifies access and usage of these nested components in your code, allowing direct reference without the 'ActionDropdown.' prefix.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/ActionDropdownStoriesDocs/ActionDropdownDocs.mdx#_snippet_1

LANGUAGE: JavaScript
CODE:
```
const { Menu, MenuItem, Divider } = ActionDropdown;
```

----------------------------------------

TITLE: Default CSS Variables for neeto-ui ActionDropdown
DESCRIPTION: Lists the CSS variables available for customizing the `ActionDropdown` component in neeto-ui (v6+). These variables control properties such as gap and border-radius, allowing for fine-grained styling adjustments.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/ActionDropdownStoriesDocs/ActionDropdownCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
--neeto-ui-action-dropdown-gap: 1px;
--neeto-ui-action-dropdown-border-radius: 0px;
```

----------------------------------------

TITLE: Default CSS Variables for neeto-ui Slider Handle
DESCRIPTION: These CSS variables define the default box-shadow styles for the handle of the neeto-ui Slider component. They control the visual appearance of the handle in its normal and focused states, using primary theme colors.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/SliderStoriesDocs/SliderCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
--neeto-ui-slider-handle-box-shadow: 0 0 0 2px rgb(var(--neeto-ui-primary-600));
--neeto-ui-slider-handle-focus-box-shadow: 0 0 0 4px rgb(var(--neeto-ui-primary-500));
```

----------------------------------------

TITLE: Delaying MultiEmailInput Counter Display
DESCRIPTION: Illustrates how to configure the `MultiEmailInput` component to only display the email counter after a certain number of emails have been entered. This can improve initial UI cleanliness by hiding the counter until it becomes relevant. The `startsFrom` property within the `counter` object controls this threshold.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/MultiEmailInputStoriesDocs/MultiEmailInputCounterDocs.mdx#_snippet_2

LANGUAGE: jsx
CODE:
```
<MultiEmailInput counter={{ startsFrom: 3 }} />
```

----------------------------------------

TITLE: Enable Vertical Scrolling for Neeto-UI Table Component
DESCRIPTION: This JSX snippet demonstrates how to enable vertical scrolling for the Neeto-UI Table component. It involves wrapping the `<Table>` component within a `div` element that has a defined height, and setting the `fixedHeight` prop on the `<Table>` component to `true`. This setup ensures the table content scrolls vertically within the specified container.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TableStoriesDocs/TableFixedHeightDocs.mdx#_snippet_0

LANGUAGE: jsx
CODE:
```
<div style={{ height: "100vh" }}>
  <Table fixedHeight rowData={TABLE_DATA} columnData={columns} />
</div>
```

----------------------------------------

TITLE: CSS Variables for neeto-ui Toastr Component Customization
DESCRIPTION: This snippet lists the comprehensive set of CSS variables available for customizing the neeto-ui Toastr component. These variables control various aspects such as container dimensions, background colors for different toastr types (info, error, success, warning), padding, margins, box shadow, border radius, icon size, gap, text color, font size, and close button styling. Developers can override these variables to match their application's design system.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Overlays/ToastrStoriesDocs/ToastrCSSCustomization.mdx#_snippet_0

LANGUAGE: css
CODE:
```
// Container
--neeto-ui-toastr-min-width: 320px;
--neeto-ui-toastr-max-width: 640px;
--neeto-ui-toastr-z-index: 100000;

// Styles
--neeto-ui-info-toastr-bg-color: rgb(var(--neeto-ui-info-800));
--neeto-ui-error-toastr-bg-color: rgb(var(--neeto-ui-error-800));
--neeto-ui-success-toastr-bg-color: rgb(var(--neeto-ui-success-800));
--neeto-ui-warning-toastr-bg-color: rgb(var(--neeto-ui-warning-800));

// Toastr
--neeto-ui-toastr-min-height: 48px;
--neeto-ui-toastr-padding-x: 1rem;
--neeto-ui-toastr-padding-y: 0.75rem;
--neeto-ui-toastr-margin-x: 0;
--neeto-ui-toastr-margin-y: 1rem;
--neeto-ui-toastr-box-shadow: none;
--neeto-ui-toastr-border-radius: var(--neeto-ui-rounded-md);
--neeto-ui-toastr-icon-size: 24px;
--neeto-ui-toastr-gap: 12px;
--neeto-ui-toastr-color: rgb(var(--neeto-ui-white));
--neeto-ui-toastr-font-size: var(--neeto-ui-text-sm);
--neeto-ui-toastr-font-weight: var(--neeto-ui-font-normal);

// Close Button
--neeto-ui-toastr-close-btn-color: rgb(var(--neeto-ui-white));
--neeto-ui-toastr-close-btn-margin-y: auto;
--neeto-ui-toastr-close-btn-margin-right: 0px;
--neeto-ui-toastr-close-btn-margin-left: 8px;
```

----------------------------------------

TITLE: Disable Row Selection in neeto-ui Table
DESCRIPTION: This snippet demonstrates how to render the neeto-ui Table component without the default row selection checkbox. By setting the `rowSelection` prop to `false`, users can prevent rows from being individually selectable, which is useful for display-only tables or when selection is handled externally.
SOURCE: https://github.com/neetozone/neeto-ui/blob/main/stories/Components/TableStoriesDocs/TableWithoutCheckboxDocs.mdx#_snippet_0

LANGUAGE: jsx
CODE:
```
<div>
  <Table rowSelection={false} />
</div>
```
