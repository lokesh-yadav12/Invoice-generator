# Invoice Templates Structure

## Overview

Created 6 separate invoice template folders based on the WorkflowToolsCarousel buttons.

## Folder Structure

```
src/pages/
├── invoice-templates/
│   ├── invoice-generator/
│   │   ├── BilledBySection.tsx
│   │   ├── BilledToSection.tsx
│   │   ├── DetailsForm.tsx
│   │   ├── Invoice.tsx
│   │   └── InvoicePreview.tsx
│   │
│   ├── purchase-order/
│   │   ├── BilledBySection.tsx
│   │   ├── BilledToSection.tsx
│   │   ├── DetailsForm.tsx
│   │   ├── Invoice.tsx
│   │   └── InvoicePreview.tsx
│   │
│   ├── quotation/
│   │   ├── BilledBySection.tsx
│   │   ├── BilledToSection.tsx
│   │   ├── DetailsForm.tsx
│   │   ├── Invoice.tsx
│   │   └── InvoicePreview.tsx
│   │
│   ├── gst-invoice/
│   │   ├── BilledBySection.tsx
│   │   ├── BilledToSection.tsx
│   │   ├── DetailsForm.tsx
│   │   ├── Invoice.tsx
│   │   └── InvoicePreview.tsx
│   │
│   ├── delivery-challan/
│   │   ├── BilledBySection.tsx
│   │   ├── BilledToSection.tsx
│   │   ├── DetailsForm.tsx
│   │   ├── Invoice.tsx
│   │   └── InvoicePreview.tsx
│   │
│   └── proforma-invoice/
│       ├── BilledBySection.tsx
│       ├── BilledToSection.tsx
│       ├── DetailsForm.tsx
│       ├── Invoice.tsx
│       └── InvoicePreview.tsx
│
├── AdvanceOptions.tsx (Common)
├── Billed.tsx (Common)
├── ItemHeader.tsx (Common)
├── ItemTable.tsx (Common)
├── ShippingDetails.tsx (Common)
├── SixItem.tsx (Common)
├── Total.tsx (Common)
└── TransportDetails.tsx (Common)
```

## Template-Specific Files (Different for each template)

These files are located in each template folder and can be customized independently:

- **BilledBySection.tsx** - Vendor/Business details section
- **BilledToSection.tsx** - Client details section
- **DetailsForm.tsx** - Invoice number, date, and custom fields
- **Invoice.tsx** - Main invoice form component
- **InvoicePreview.tsx** - Invoice preview and PDF generation

## Common Files (Shared across all templates)

These files remain in the `src/pages/` folder and are imported by all templates:

- **AdvanceOptions.tsx** - Advanced invoice options
- **Billed.tsx** - Billing details wrapper
- **ItemHeader.tsx** - Items table header
- **ItemTable.tsx** - Items table with add/edit functionality
- **ShippingDetails.tsx** - Shipping from/to details
- **SixItem.tsx** - Document actions (notes, terms, attachments, etc.)
- **Total.tsx** - Invoice totals calculation
- **TransportDetails.tsx** - Transport mode and vehicle details

## Import Paths

All template-specific files now use relative imports to access common files:

- Common files: `../../FileName.tsx` (from template folder to pages folder)
- Store imports: `../../../store` (from template folder to store folder)
- Local files: `./FileName.tsx` (within same template folder)

## Next Steps

1. Customize each template's specific files according to their requirements
2. Update routing to use the appropriate template based on user selection
3. Modify titles and labels for each template (e.g., "Purchase Order" instead of "Invoice")
4. Add template-specific validation and business logic
