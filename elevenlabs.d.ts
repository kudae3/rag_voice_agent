import * as React from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'agent-id'?: string;
          // Add other ElevenLabs custom attributes here if needed
        },
        HTMLElement
      >;
    }
  }
}
