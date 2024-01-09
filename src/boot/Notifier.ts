import { Notify } from 'quasar';

export default function Notifier(message: string, type: 'positive' | 'negative') {
  return Notify.create({
    message,
    type,
    position: 'bottom-right',
  });
}
