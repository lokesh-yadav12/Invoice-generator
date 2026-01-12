# Invoice Templates Routing Setup

## Overview

Successfully connected all 6 invoice template buttons in WorkflowToolsCarousel to their respective invoice forms.

## Routes Configuration

### Main Routes

- **Home Page**: `/` - Shows the WorkflowToolsCarousel with 6 buttons
- **Invoice Templates**: `/invoice/:templateType` - Dynamic route for all 6 templates

### Template Routes

1. **Invoice Generator**: `/invoice/invoice-generator`
2. **Purchase Order**: `/invoice/purchase-order`
3. **Quotation**: `/invoice/quotation`
4. **GST Invoice**: `/invoice/gst-invoice`
5. **Delivery Challan**: `/invoice/delivery-challan`
6. **Proforma Invoice**: `/invoice/proforma-invoice`

## How It Works

### 1. WorkflowToolsCarousel Component

Each tool card now has a `route` property and uses React Router's `navigate()` function:

```typescript
const tools = [
  {
    title: 'Invoice Generator',
    buttonText: 'Create Invoice',
    route: '/invoice/invoice-generator',
    // ... other properties
  },
  // ... 5 more tools
];

// Button click handler
<button onClick={() => navigate(tool.route)}>
  {tool.buttonText}
</button>
```

### 2. App.tsx - Dynamic Template Loading

The `InvoiceApp` component uses URL parameters to determine which template to load:

```typescript
const { templateType } = useParams<{ templateType: string }>();

const templateConfig = {
	'invoice-generator': {
		FormComponent: InvoiceGeneratorForm,
		PreviewComponent: InvoiceGeneratorPreview,
		label: 'Invoice',
	},
	// ... 5 more templates
};

const config = templateConfig[templateType || 'invoice-generator'];
```

### 3. Dynamic Header Labels

The page header automatically updates based on the template:

- Invoice Generator → "Create New Invoice"
- Purchase Order → "Create New Purchase Order"
- Quotation → "Create New Quotation"
- GST Invoice → "Create New GST Invoice"
- Delivery Challan → "Create New Delivery Challan"
- Proforma Invoice → "Create New Proforma Invoice"

### 4. Step Labels

The stepper also updates dynamically:

- Step 1: "Add [Document Type] Details"
- Step 2: "Design & Share"

## File Structure

```
src/
├── App.tsx (Main routing logic)
├── components/
│   └── WorkflowToolsCarousel.tsx (6 buttons with navigation)
└── pages/
    ├── invoice-templates/
    │   ├── invoice-generator/
    │   │   ├── Invoice.tsx
    │   │   ├── InvoicePreview.tsx
    │   │   └── index.ts
    │   ├── purchase-order/
    │   │   ├── Invoice.tsx
    │   │   ├── InvoicePreview.tsx
    │   │   └── index.ts
    │   ├── quotation/
    │   │   ├── Invoice.tsx
    │   │   ├── InvoicePreview.tsx
    │   │   └── index.ts
    │   ├── gst-invoice/
    │   │   ├── Invoice.tsx
    │   │   ├── InvoicePreview.tsx
    │   │   └── index.ts
    │   ├── delivery-challan/
    │   │   ├── Invoice.tsx
    │   │   ├── InvoicePreview.tsx
    │   │   └── index.ts
    │   └── proforma-invoice/
    │       ├── Invoice.tsx
    │       ├── InvoicePreview.tsx
    │       └── index.ts
    └── [Common files remain here]
```

## User Flow

1. User lands on home page (`/`)
2. User sees WorkflowToolsCarousel with 6 template options
3. User clicks "Create Invoice" (or any other button)
4. App navigates to `/invoice/invoice-generator` (or respective route)
5. App.tsx reads the `templateType` parameter
6. Correct template components are loaded dynamically
7. User fills out the form (Step 1)
8. User clicks "Save & Continue"
9. Preview page shows with the correct template (Step 2)

## Benefits

✅ **Single Route Pattern**: One route handles all 6 templates
✅ **Easy to Extend**: Add new templates by updating the config object
✅ **Type-Safe**: TypeScript ensures correct component types
✅ **Clean URLs**: Semantic URLs like `/invoice/purchase-order`
✅ **Dynamic Labels**: Headers and steps update automatically
✅ **No Code Duplication**: Shared logic in one place

## Testing

To test each template:

1. Start the dev server: `npm run dev`
2. Navigate to home page
3. Click each of the 6 buttons
4. Verify correct form loads with proper header
5. Fill out form and check preview page

## Next Steps

1. Customize each template's form fields
2. Add template-specific validation rules
3. Customize preview layouts per template
4. Add template-specific PDF generation logic
5. Implement template selection persistence
