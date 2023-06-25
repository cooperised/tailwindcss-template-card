import clsx from 'clsx'

export function FloatingInput ({
  label,
  value,
  onChange,
  isMinimized
}: {
  label: string
  value: string
  onChange: (value: string) => void
  isMinimized?: boolean
}) {
  return (
    <div class='relative p-1 w-[50%] flex flex-col-reverse'>
      <input
        type='text'
        name='floating_outlined'
        value={value}
        onChange={e => onChange((e.target as HTMLInputElement).value)}
        class={clsx(
          'bg-white/5 z-10 input h-10 peer focus:outline-none',
          isMinimized ? 'w-24 text-sm' : 'w-full'
        )}
        placeholder={label}
        autoComplete={'off'}
        spellcheck={false}
      />
      <label
        for='floating_outlined'
        class='flex text-base-content peer-hover:text-[hsl(var(--a))] peer-hover:scale-110 peer-focus:scale-110 peer-focus:text-[hsl(var(--a))] duration-300 w-fit opacity-100 peer-placeholder-shown:opacity-0'
      >
        <span className='label-text-alt text-inherit'>{label}</span>
      </label>
    </div>
  )
}
