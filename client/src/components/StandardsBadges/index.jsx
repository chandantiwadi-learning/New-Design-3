import React from 'react';
import { 
  Globe, 
  Flag, 
  Settings, 
  Briefcase, 
  Truck, 
  Building2, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';

export const DINBadge = (props) => <Globe {...props} />;
export const ISOBadge = (props) => <Flag {...props} />;
export const ASMEBadge = (props) => <Settings {...props} />;
export const BSBadge = (props) => <Briefcase {...props} />;
export const SAEBadge = (props) => <Truck {...props} />;
export const UNIBadge = (props) => <Building2 {...props} />;
export const BISBadge = (props) => <CheckCircle2 {...props} />;
export const DefaultBadge = (props) => <FileText {...props} />;
