import React, { Suspense } from "react";
import UnsubscribePageContent from "@/components/UnsubscribePageContent";

export default function UnsubscribeWrapper() {
  return (
    <Suspense>
      <UnsubscribePageContent />
    </Suspense>
  );
}
