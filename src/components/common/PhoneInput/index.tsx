import { InputHTMLAttributes } from 'react'
import {
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput
} from 'react-international-phone'
import Typography from '../Typography'
import { DropdownItem, DropdownList, Select } from '../Select'
import classNames from 'classnames'
import { cva, VariantProps } from 'class-variance-authority'

const phoneInputVariants = cva([], {
  variants: {
    variant: {
      outlined: ['border', 'border-primary-500'],
      underlined: ['border-b', 'border-primary-500']
    }
  },
  defaultVariants: {
    variant: 'outlined'
  }
})

interface PhoneInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>,
    VariantProps<typeof phoneInputVariants> {
  label: string
  error?: string
  onChange: (value: string) => void
}

export default function PhoneInput({
  onChange,
  variant,
  label,
  error,
  ...props
}: PhoneInputProps) {
  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: 'us',
      countries: defaultCountries,
      onChange: (data) => {
        onChange(data.phone)
      }
    })

  return (
    <div>
      <div
        className={classNames(
          'rounded-[4px]',
          'px-4 py-3.5',
          'relative',
          phoneInputVariants({ variant }),
          {
            '!border-error-500 !text-error-500': error,
            'pointer-events-none select-none !border-grey-700 bg-grey-200 !text-grey-700':
              props.disabled
          }
        )}
      >
        <Typography
          variant={'body1'}
          className={classNames('font-semibold', 'mb-1.5')}
        >
          {label}
        </Typography>
        <div
          className={classNames(
            'relative',
            'flex',
            'flex-row',
            'items-stretch',
            'gap-2'
          )}
        >
          <Select
            header={<FlagImage iso2={country.iso2} className="h-6 w-auto" />}
          >
            <DropdownList>
              {defaultCountries.map((c) => {
                const country = parseCountry(c)
                return (
                  <DropdownItem
                    key={country.iso2}
                    onClick={() => setCountry(country.iso2)}
                  >
                    <FlagImage iso2={country.iso2} className="h-6 w-auto" />
                    <Typography className="text-grey-900">
                      {country.name}
                    </Typography>
                    <Typography className="text-grey-700">
                      +{country.dialCode}
                    </Typography>
                  </DropdownItem>
                )
              })}
            </DropdownList>
          </Select>
          <input
            value={inputValue}
            onChange={handlePhoneValueChange}
            type="tel"
            ref={inputRef}
            className="w-full bg-transparent text-base accent-primary-500 outline-none ring-0"
          />
        </div>
      </div>
      {error && !props.disabled && (
        <Typography variant="body3" className="mt-1 text-left text-error-500">
          {error}
        </Typography>
      )}
    </div>
  )
}
