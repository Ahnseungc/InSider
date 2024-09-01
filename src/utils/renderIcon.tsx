import { IconComponents } from '@/models';

export const RenderIcon = (
  iconName: string,
  iconComponents: IconComponents
) => {
  const IconComponent = iconComponents[iconName];
  return IconComponent ? <IconComponent /> : null;
};
