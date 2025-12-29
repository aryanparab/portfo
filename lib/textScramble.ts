// lib/textScramble.ts - Text scramble/glitch reveal effect

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

export class TextScramble {
  private el: HTMLElement;
  private chars: string;
  private queue: Array<{ from: string; to: string; start: number; end: number }>;
  private frameRequest?: number;
  private frame: number;
  private resolve?: () => void;

  constructor(el: HTMLElement) {
    this.el = el;
    this.chars = chars;
    this.queue = [];
    this.frame = 0;
  }

  setText(newText: string): Promise<void> {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => (this.resolve = resolve));

    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest!);
    this.frame = 0;
    this.update();

    return promise;
  }

  private update = () => {
    let output = '';
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!to || Math.random() < 0.28) {
          output += this.randomChar();
        } else {
          output += to;
        }
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve?.();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  };

  private randomChar(): string {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// Helper function to scramble an element
export const scrambleText = (element: HTMLElement, text: string): Promise<void> => {
  const fx = new TextScramble(element);
  return fx.setText(text);
};

// Helper to scramble on scroll reveal
export const scrambleOnReveal = (element: HTMLElement) => {
  const originalText = element.textContent || '';
  element.textContent = ''; // Clear initially
  
  return () => {
    scrambleText(element, originalText);
  };
};