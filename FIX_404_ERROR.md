# Fix for 404 Error - BilledToSection.tsx

## Problem

The application was throwing a 404 error when trying to load `BilledToSection.tsx` and `BilledBySection.tsx`.

## Root Cause

The `Billed.tsx` component (which is a common/shared component) was trying to import `BilledBySection` and `BilledToSection` from the pages folder:

```typescript
// OLD CODE - BROKEN
import BilledBySection from './BilledBySection';
import BilledToSection from './BilledToSection';
```

However, these files were moved to the individual template folders:

- `src/pages/invoice-templates/invoice-generator/BilledBySection.tsx`
- `src/pages/invoice-templates/purchase-order/BilledBySection.tsx`
- etc.

## Solution

Changed `Billed.tsx` to accept `BilledBySection` and `BilledToSection` as props instead of importing them directly.

### 1. Updated Billed.tsx

```typescript
// NEW CODE - FIXED
interface BillingDetailsSectionProps {
	BilledBySection: React.ComponentType<any>;
	BilledToSection: React.ComponentType<any>;
}

export default function BillingDetailsSection({ BilledBySection, BilledToSection }: BillingDetailsSectionProps) {
	// ... component logic
}
```

### 2. Updated All Template Invoice.tsx Files

Each template now imports its own `BilledBySection` and `BilledToSection` and passes them as props:

```typescript
// In each template's Invoice.tsx
import BilledBySection from './BilledBySection';
import BilledToSection from './BilledToSection';
import BillingDetailsSection from '../../Billed';

// Then in the JSX:
<BillingDetailsSection
  BilledBySection={BilledBySection}
  BilledToSection={BilledToSection}
/>
```

## Files Modified

1. `src/pages/Billed.tsx` - Made it accept components as props
2. `src/pages/invoice-templates/invoice-generator/Invoice.tsx`
3. `src/pages/invoice-templates/purchase-order/Invoice.tsx`
4. `src/pages/invoice-templates/quotation/Invoice.tsx`
5. `src/pages/invoice-templates/gst-invoice/Invoice.tsx`
6. `src/pages/invoice-templates/delivery-challan/Invoice.tsx`
7. `src/pages/invoice-templates/proforma-invoice/Invoice.tsx`

## Benefits of This Approach

✅ **Flexibility**: Each template can have its own customized BilledBySection and BilledToSection
✅ **No Duplication**: The common billing logic stays in Billed.tsx
✅ **Type Safety**: TypeScript ensures correct component types are passed
✅ **Clean Architecture**: Clear separation between common and template-specific code

## Testing

After this fix:

1. Navigate to any invoice template
2. The billing sections should load without 404 errors
3. All 6 templates should work correctly
